import { LoginEnum, Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {}
  create(body: Omit<Prisma.UserCreateInput, ''>) {
    console.log(body);
    return this.db.user
      .create({
        data: {
          ...body,
          login: {
            create: {
              username: body.phone,
              type: LoginEnum.USER,
              password: '',
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
  getDefaultResultOrder() {
    return this.db.user.findMany({
      include: { login: { select: { username: true } } },
      where: {
        Company: {
          NOT: [
            { card: { some: { id: { not: { equals: 1 } } } } },
            { card: {} },
          ],
        },
      },
      cursor: { login: { id: 1 }, id: 2 },
    });
  }
}
