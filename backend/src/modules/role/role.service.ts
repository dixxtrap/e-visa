import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { RoleDto } from 'src/dto/role.dto';
import { OnModuleInit } from '@nestjs/common';

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

  getAll() {
    return this.db.role.findMany();
  }
  create(body: RoleDto) {
    // const data = excludeFields(body, ['id']);

    // console.log(excludeFields(body, ['user', 'permission']));
    return this.db.role.create({ data: body });
  }
}
