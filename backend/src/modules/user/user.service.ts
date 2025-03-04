import { LoginEnum } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';
import { UserDto, UserUpdateDto } from 'src/dto/user.dto';
import { excludeFields } from 'src/utils/exclude_key';
import { CryptoService } from 'src/utils/crypto_service';
import { throwSuccess } from 'src/exception/ws_message';
import { OnModuleInit } from '@nestjs/common/interfaces/hooks';
import { ConfigService } from '@nestjs/config';
import { BaseResponse } from 'src/utils/base_response';
import { PaginationDto, PaginationUserDto } from 'src/dto/pagination.dto';
import { EmailerService } from '../mailer/mailer.service';
import { createAdminFactory } from './factory/create_admin.factory';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(
    private readonly db: DatabaseService,
    private readonly crypto: CryptoService,
    private readonly config: ConfigService,
    private readonly mailer: EmailerService,
  ) {}
  onModuleInit() {
    // throw new Error('Method not implemented.');
    this.createAdminUser();
  }
  createAdminUser() {
    return createAdminFactory(this.db, this.config, this.crypto);
  }
  create(body: UserDto) {
    console.log(body);
    return this.db.user
      .create({
        data: {

          ...excludeFields(body, ['password',]),
          login: {
            create: {
              ...body.login,
              username: body.phone,
              type: LoginEnum.USER,


              password: this.crypto.hash(body.password),
            },
          },
        },

        include: { login: true },
      })
      .then((val) => {
        const code = this.crypto.encrypt(
          `${val.loginId}_${new Date().getTime()}`,
        );
        return this.db.opt.create({
          data: { via: 'MAIL',duration:"HOUR_12", code: code, loginId: val.loginId },
        }).then(() => {
          return this.mailer.sendUserConfirmation({
            email: 'djiga2015@gmail.com',
            token: code,
          });
        });

      }).then(throwSuccess);
  }
  updateById({ body, id }: { body: UserUpdateDto; id: number }) {
    console.log(body);
    return this.db.user
      .update({
        where: { loginId: id },
        data: {

          ...excludeFields(body, ['login']),
          login: {

            update: {

              data: { ...body.login }
            }
          }
        },
      })
      .then(throwSuccess);
  }
  getById(id: number) {
    console.log(id);
    return this.db.user
      .findFirstOrThrow({ where: { loginId: Number(id) },include:{} })
      .then((val) => {
        return BaseResponse.success(val);
      });
  }
  getAll({ query }: { query: PaginationUserDto }) {
    return this.db.user
      .findMany({
        include: {
          login: { include: { role: true }, omit: { password: true } },
        },
        where: {},
      })
      .then((val) => BaseResponse.successWithPagination(val, 1, query.perpage));
  }
}
