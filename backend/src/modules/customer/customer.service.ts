import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { PaginationDto, getPaginationParams } from 'src/dto/pagination.dto';
import { BaseResponse } from 'src/utils/base_response';
import { CustomerDto, CustomerUpdateDto } from 'src/dto/customer.dto';
import { excludeFields } from '../../utils/exclude_key';
import { CryptoService } from 'src/utils/crypto_service';
import { LoginEnum, Login } from '@prisma/client';
import { throwSuccess } from 'src/exception/ws_message';

@Injectable()
export class CustomerService {
  constructor(
    private readonly db: DatabaseService,
    private readonly crypto: CryptoService,
  ) {}
  all(query: PaginationDto) {
    return this.db.customer
      .findMany({ ...getPaginationParams(query) , include:{login:{omit:{password:true}, include:{role:true}}}})
      .then((val) => BaseResponse.success(val));
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
              type: LoginEnum.USER,
            },
          },
        },
      })
      .then(throwSuccess);
  }
  update({id, body}:{id:number, body:CustomerUpdateDto}){
    return this.db.customer.update({
      where: { loginId: id },
      data: {
        ...excludeFields(body, ['login']),
        login: { update: { data: body.login } },
      },
    }).then(throwSuccess);
  }
}
