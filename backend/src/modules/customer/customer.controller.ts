import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { CustomerService } from './customer.service';
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
import { CustomerDto, CustomerUpdateDto } from 'src/dto/customer.dto';
import { PaginationCustomerDto, PaginationDto } from 'src/dto/pagination.dto';
import { Public } from '../security/is_public.meta';

const Tag: string = 'customer';
@ApiTags(Tag)
@Controller(Tag)
export class CustomerController {
  constructor(private readonly service: CustomerService) {}
  @Get('all')
  all(@Query() query: PaginationCustomerDto) {
    return this.service.all(query);
  }
  @Get('activation/:code')
  @Public()
  activation(@Param('code') code: string) {
      console.log(code)
    return this.service.activation(code);
  }
  @Get('by_id/:id')
  oneById(@Param('id') id: number) {}
  @Post('create')
  @Public()
  create(@Body() body: CustomerDto) {
    return this.service.create({ body });
  }
  @Patch('by_id/:id')
  update(@Param('id') id: number, @Body() body: CustomerUpdateDto) {
    return this.service.update({ id, body });
  }
}
