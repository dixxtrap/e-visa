import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { RoleService } from './role.service';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import {
  Get,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { RoleDto } from 'src/dto/role.dto';
import { HttpExceptionFilter } from 'src/exception/exception_catch';
import { UseFilters } from '@nestjs/common/decorators/core/exception-filters.decorator';
@UseFilters(HttpExceptionFilter)
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
  @Get()
  getAll() {
    return this.service.getAll();
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
