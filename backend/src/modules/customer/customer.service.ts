import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import {
  PaginationCustomerDto,
  PaginationDto,
  getPaginationParams,
} from 'src/dto/pagination.dto';
import { BaseResponse } from 'src/utils/base_response';
import { CustomerDto, CustomerUpdateDto } from 'src/dto/customer.dto';
import { excludeFields } from '../../utils/exclude_key';
import { CryptoService } from 'src/utils/crypto_service';
import { LoginEnum, Login } from '@prisma/client';
import { throwSuccess } from 'src/exception/ws_message';
import { EmailerService } from '../mailer/mailer.service';

@Injectable()
export class CustomerService {
  constructor(
    private readonly db: DatabaseService,
    private readonly crypto: CryptoService,
    private readonly mailer: EmailerService,
  ) {}
  all(query: PaginationCustomerDto) {
    console.debug(query);
    const whereClause = {
      phone: { contains: query.phone ?? '' },
      displayname: { contains: query.displayname ?? '' },
      email: { contains: query.email ?? '' },
    };
    return this.db.customer
      .findMany({
        ...getPaginationParams(query),
        where: whereClause,
        include: {
          login: { omit: { password: true }, include: { role: true } },
          _count: { select: { application: true } },
        },
      })
      .then(async (val) =>
        BaseResponse.successWithPagination(
          val,
          await this.db.customer.count({ where: whereClause }),
          query.perpage,
        ),
      );
  }
  create({ body }: { body: CustomerDto }) {
    return this.db.customer
      .create({
        data: {
          ...excludeFields(body, ['password']),
          login: {
            create: {
              username: body.email,
              password: this.crypto.hash(body.password),
              type: LoginEnum.CUSTOMER,
            },
          },
        },
      })
      .then((val) => {
        const code = this.crypto.encrypt(
          `${val.loginId}_${new Date().getTime()}`,
        );
        return this.db.opt
          .create({
            data: {
              via: 'MAIL',
              duration: 'HOUR_12',
              code: code,
              loginId: val.loginId,
            },
          })
          .then(() => {
            return this.mailer.sendCustomerValidation({
              email: val.email,
              token: code,
            });
          });
      })
      .then(throwSuccess);
  }
  activation(code: string) {
    return this.db.opt
      .findFirstOrThrow({ where: { code: code, staus:"PENDING" } })
      .then((val) => {
        this.db.opt
        const id = Number(this.crypto.decrypt(code).split("_")[0]);
        return this.db.login.update({where:{id:id},data:{isActive:true}})
      }).then(throwSuccess)
  }
  update({ id, body }: { id: number; body: CustomerUpdateDto }) {
    return this.db.customer
      .update({
        where: { loginId: id },
        data: {
          ...excludeFields(body, ['login']),
          login: { update: { data: body.login } },
        },
      })
      .then(throwSuccess);
  }
}
