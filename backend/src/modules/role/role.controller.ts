import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { RoleService } from './role.service';
import {
  Body,
  Param,
  Query,
} from '@nestjs/common/decorators/http/route-params.decorator';
import {
  Get,
  Patch,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
import { PaginationDto, PaginationSearchDto } from 'src/dto/pagination.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { ApiConsumes } from '@nestjs/swagger/dist/decorators/api-consumes.decorator';
const Tag:string='role'
@Controller(Tag)
@ApiTags(Tag)
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Get('all')
  getAll(@Query() query:PaginationSearchDto) {
    return this.service.getAll({query});
  }
  @Get('by_id/:id')
  getOne(@Param('id') id: number) {
    return this.service.getById({ id });
  }
  @Post('create')
  // @ApiConsumes('multipart/form-data')
  create(
    @Body()
    body: RoleDto,
  ) {
    console.log(body);
    return this.service.create(body);
  }
  @Patch('by_id/:id')
  update(
    @Param('id') id: number,
    @Body()
    body: RoleUpdateDto,
  ) {
    console.log(body);
    return this.service.update({ body, id });
  }
}
