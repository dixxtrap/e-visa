import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { UserService } from './user.service';
import {
  Post,
  Get,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Param,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { HttpExceptionFilter } from 'src/exception/exception_catch';
import { UseFilters } from '@nestjs/common/decorators/core/exception-filters.decorator';
import { UserDto } from 'src/dto/user.dto';
import { ParamIdDto } from 'src/dto/id_param';

@Controller('user')
export class UserController {
  constructor(private readonly userServide: UserService) {}
  @Post()
  create(@Body() body: UserDto) {
    return this.userServide.create(body);
  }
  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  getById(@Param() param: ParamIdDto) {
    return this.userServide.getById(param.id);
  }
  @Get()
  getAll() {
    return this.userServide.getAll();
  }
}
