import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
import { OnModuleInit } from '@nestjs/common';
import { BaseResponse } from 'src/utils/base_response';
import { excludeFields } from 'src/utils/exclude_key';
import { HttpExceptionCode, WsMessage } from 'src/exception/ws_message';

@Injectable()
export class RoleService implements OnModuleInit {
  constructor(private readonly db: DatabaseService) {}
  onModuleInit() {
    this.createAdminRole();
  }

  createAdminRole() {
    console.log('=========create role adsmin=============');
    return this.db.role
      .upsert({
        create: { name: 'super_admin' },
        update: {},
        where: { name: 'super_admin' },
      })
      .then((val) => {
        console.log(val);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
  getAll() {
    return this.db.role
      .findMany({
        include: {
          rolePermission: {
            select: { permission: { select: { id: true, code: true } } },
          },
        },
      })
      .then((val) => BaseResponse.success(val));
  }
  create(body: RoleDto) {
    // const data = excludeFields(body, ['id']);

    // console.log(excludeFields(body, ['user', 'permission']));
    return this.db.role.create({ data: body });
  }
}
