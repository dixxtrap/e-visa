import { LoginEnum } from 'prisma/types';
import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { CryptoService } from 'src/utils/crypto_service';
import { excludeFields } from 'src/utils/exclude_key';
@Injectable()
export class UserService {
  constructor(
    private db: DatabaseService,
    private crypto: CryptoService,
  ) {}
  create(body: UserDto) {
    console.log(body);
    return this.db.user
      .create({
        data: {
          ...excludeFields(body, ['password', 'roleId']),
          login: {
            create: {
              username: body.phone,
              type: LoginEnum.USER,
              roleId: body.roleId,
              password: this.crypto.createHash(body.password),
            },
          },
        },
        include: { login: true },
      })
      .catch((e) => {
        console.log(typeof e);
        return {
          meta: e.meta,
          messages: (e.message.split('\n') as string[])[
            e.message.split('\n').length - 1
          ],
        };
      });
  }
  getById(id: number) {
    console.log(id);
    return this.db.user
      .findFirstOrThrow({ where: { id: Number(id) } })
      .then((val) => {
        return excludeFields(val, ['loginId']);
      });
  }
  getAll() {
    return this.db.user.findMany({
      include: {
        login: {
          select: {
            username: true,
            role: { select: { id: true, name: true } },
          },
        },
      },
      where: {},
    });
  }
}
