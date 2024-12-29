import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { UserService } from './user.service';
import {
  Post,
  Get,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { HttpExceptionFilter } from 'src/exception/exception_catch';
import { UseFilters } from '@nestjs/common/decorators/core/exception-filters.decorator';
import { HttpExceptionCode, WsMessage } from 'src/exception/ws_message';
import { UserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userServide: UserService) {}
  @Post()
  create(@Body() body: UserDto) {
    return this.userServide.create(body);
  }
  @Get('id')
  @UseFilters(HttpExceptionFilter)
  getById() {
    throw new WsMessage(HttpExceptionCode.SUCCEEDED);
  }
  @Get()
  getAll() {
    return this.userServide.getAll();
  }
}
