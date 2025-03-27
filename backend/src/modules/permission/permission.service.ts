import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { PermissionActionEnum } from '@prisma/client';

import { PermissionDto } from 'src/dto/permission.dto';
import { PaginationSearchDto } from 'src/dto/pagination.dto';
import { BaseResponse } from 'src/utils/base_response';
import { OnModuleInit } from '@nestjs/common/interfaces/hooks/on-init.interface';

@Injectable()
export class PermissionService implements OnModuleInit {
  constructor(private readonly db: DatabaseService) {}
  onModuleInit() {
    this.createPermissionModule();
  }
 async  createPermissionModule() {
    return this.db.module.findMany().then((val) => {
      return Promise.all(
        val.map((m) => { 
          return Promise.all(
            [
              PermissionActionEnum.MANAGE,
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
                  where: {  code_moduleId:{code :`${action}_${m.name}`, moduleId:m.id}},
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
  async create({ body }: { body: PermissionDto }) {
      return this.db.permission.create({data:body});
    }
  async all({ query }: { query: PaginationSearchDto }) {
    const whereClause = {
       ...(query.search?{code: { contains: query.search }}:{})
     }
      return this.db.permission
        .findMany({
          skip: (Number(query.page) - 1) * Number(query.perpage),
          take: Number(query.perpage),
          omit: { comment: true },
          include: {
            module:true,
            _count: {
              select: { rolePermission: true },
            },
          },
          where: whereClause,
        })
        .then(async (val) =>
          BaseResponse.successWithPagination(
            val,
            await this.db.permission.count({
              where: whereClause,
            }),
            query.perpage, 
          ),
        );
    }
}
