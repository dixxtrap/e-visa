import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { DatabaseService } from '../database/database.service';
import { PermissionDto } from 'src/dto/permission.dto';
import {
  Get,
  Patch,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Param,
  Query,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { PaginationSearchDto } from 'src/dto/pagination.dto';
import { PermissionService } from './permission.service';
const TAG = 'permission';
@ApiTags(TAG)
@Controller(TAG)
export class PermissionController {
  constructor(private readonly service: PermissionService) {}
  @Post('create')
  create(@Body() body: PermissionDto) {
    return body;
  }
  @Get('all')
  all(@Query() query:PaginationSearchDto) {
    return this.service.all({query})
  }
  @Patch('by_id/:id')
  updateById(@Param('id') id: number) {}
  @Get('by_id/:id')
  OneById(@Param('id') id: number) {}
}
