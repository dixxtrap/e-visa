import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';

import {
  HttpExceptionCode,
  WsMessage,
  WsMessageSuccess,
} from 'src/exception/ws_message';
import { OnModuleInit } from '@nestjs/common/interfaces/hooks';
import { excludeFields } from 'src/utils/exclude_key';
import { BaseResponse } from 'src/utils/base_response';
import { PaginationDto, PaginationSearchDto } from 'src/dto/pagination.dto';
import { contains } from 'class-validator';

@Injectable()
export class RoleService  {
  constructor(private readonly db: DatabaseService) {}
  

  update({ body, id }: { body: RoleUpdateDto; id: number }) {
    return this.db.role
      .update({
        data: { ...excludeFields(body, ['permissionIds']) },
        where: { id: id },
      })
      .then(() => {
        if (body.permissionIds && body.permissionIds.length > 0)
          return this.db.rolePermission
            .deleteMany({ where: { roleId: id } })
            .then(() => {
              return this.db.rolePermission.createMany({
                data: body.permissionIds.map((e) => ({
                  permissionId: e,
                  roleId: id,
                })),
              });
            });
      })
      .then(() => {
        throw new WsMessage(HttpExceptionCode.SUCCEEDED);
      });
  }
  getAll({ query }: { query: PaginationSearchDto }) {
    const search = {
      ...(query.search ? { name: { contains: query.search } } : {}),
    };
    return this.db.role
      .findMany({
        where: search,
        include: {
          rolePermission: {
            select: { permission: { select: { id: true, code: true } } },
          },
          _count: {
            select: {
              rolePermission: true,
              login: { where: { type: 'USER' } },
            },
          },
        },
      })
      .then(async (val) =>
        BaseResponse.successWithPagination(
          val,
          await this.db.role.count({ where: search }),
          query.perpage,
        ),
      );
  }
  getById({ id }: { id: number }) {
    return this.db.role
      .findFirstOrThrow({
        where: { id },
        include: {
          rolePermission: true,
        },
      })
      .then(async (val) => BaseResponse.success(val));
  }
  create(body: RoleDto) {
    return this.db.role.create({ data: body }).then(() => {
      throw WsMessageSuccess;
    });
  }
}
