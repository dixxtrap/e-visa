import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import {
  Post,
  Get,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userServide: UserService) {}
  @Post()
  create(@Body() body: Prisma.UserCreateInput) {
    return this.userServide.create(body);
  }
  @Get()
  getAll(@Body() body: Prisma.UserCreateInput) {
    return this.userServide.create(body);
  }
}
