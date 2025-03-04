import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from 'src/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { CryptoService } from 'src/utils/crypto_service';
import { excludeFields } from 'src/utils/exclude_key';
import { HttpExceptionCode, WsMessage } from 'src/exception/ws_message';
import { Response } from 'express';
import { BaseResponse } from 'src/utils/base_response';

Injectable();
export class SecurityService {
  constructor(
    private readonly db: DatabaseService,
    private readonly crypto: CryptoService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) { }
  profile(body) {
    // this.crypto.decrypt(.id)

    return BaseResponse.success(body);
  }

  sigin(body: LoginDto, res: Response) {
    console.log(body)
    return this.db.login
      .findFirstOrThrow({
        where: { username: body.username , type:body.type},
        include: { user: true, customer: true, role: true },
      })
      .then((val) => {
        console.log(val)
        const { id, type } = val;
        const valWithoutPassword = excludeFields(val, ['password']);

        if (!this.crypto.verifiy(body.password, val.password))
          throw new WsMessage(HttpExceptionCode.LOGIN_FAILLURE);
        const accessToken = "Bearer " + this.jwtService.sign(
          { ...valWithoutPassword },
          { expiresIn: '3600s' },
        );
        const refreshToken = "Bearer " + this.jwtService.sign(
          { data: { id, type } },
          { expiresIn: `${3600 * 24}` },
        );
        res.cookie('access_token', accessToken);
        res.cookie('refresh_token', refreshToken);
        return res
          .status(200)
          .json(BaseResponse.success({ ...valWithoutPassword, accessToken, refreshToken }));
      });
  }
}
