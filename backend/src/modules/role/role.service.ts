import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { RoleDto } from 'src/dto/role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly db: DatabaseService) {}
  create(body: RoleDto) {
    // const data = excludeFields(body, ['id']);

    // console.log(excludeFields(body, ['user', 'permission']));
    return this.db.role.create({ data: body }).catch((err) => {
      console.log(err);
      if (err.code && err.code == 'P2002') {
        return err;
      }
    });
  }
}
