import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { RoleService } from './role.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { RoleDto } from 'src/dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly service: RoleService) {}
  @Post()
  create(
    @Body()
    body: RoleDto,
  ) {
    console.log(body);
    return this.service.create(body);
  }
  @Post()
  update(
    @Body()
    body: RoleDto,
  ) {
    console.log(body);
    return this.service.create(body);
  }
}
