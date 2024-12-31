import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { PermissionActionEnum } from 'prisma/types';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class PermissionService implements OnModuleInit {
  constructor(private readonly db: DatabaseService) {}
  onModuleInit() {
    this.createPermissionModule();
  }
  createPermissionModule() {
    return this.db.module.findMany().then((val) => {
      return Promise.all(
        val.map((m) => {
          return Promise.all(
            [
              PermissionActionEnum.ALL,
              PermissionActionEnum.CREATE,
              PermissionActionEnum.DETAILS,
              PermissionActionEnum.SELF,
              PermissionActionEnum.UPDATE,
              PermissionActionEnum.READ,
            ].map((action) => {
              this.db.permission
                .upsert({
                  create: {
                    action,
                    code: `${action}_${m.name}`,
                    moduleId: m.id,
                  },
                  update: {},
                  where: { code: `${action}_${m.name}` },
                })
                .then(() => {
                  // console.log(val.id);
                })
                .catch((e) => {
                  console.log(e);
                });
            }),
          );
        }),
      );
    });
  }
}
