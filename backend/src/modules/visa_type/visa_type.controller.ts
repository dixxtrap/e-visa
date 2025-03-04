import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { VisaTypeService } from './visa_type.service';
import { Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { VisaTypeDto, VisaTypeUpdateDto } from 'src/dto/visa_type.dto';
import { Body, Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { PaginationSearchDto } from 'src/dto/pagination.dto';
import { CurrentUser } from 'src/decorateur/current_user';
import { LoginDto } from 'src/dto/login.dto';
import { AddIdDto } from 'src/dto/id_param';
const TAG:string='visa_type'
@Controller(TAG)
@ApiTags(TAG)
export class VisaTypeController {
  constructor(private readonly service: VisaTypeService) {}
  @Get('all')
  all(@Query() query:PaginationSearchDto) {
    return this.service.all({query})
  }
  @Get('by_id/:id')
  byId(@Param('id') id: number,) {
    return this.service.getOneById({id})
  }
  @Post('create')
  create(@Body() body: VisaTypeDto, @CurrentUser() by:AddIdDto&LoginDto) {
    return this.service.create({body, by})
  }
  @Patch('by_id/:id')
  update(@Param('id') id: number, @Body() body: VisaTypeUpdateDto) {
    return this.service.updateById({ id, body });
  }
}
