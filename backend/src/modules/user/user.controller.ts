import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { UserService } from './user.service';
import {
  Post,
  Get,
  Patch,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import {
  Body,
  Param,
  Query,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { UserDto, UserUpdateDto } from 'src/dto/user.dto';
import { ParamIdDto } from 'src/dto/id_param';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { ApiBearerAuth } from '@nestjs/swagger/dist/decorators/api-bearer.decorator';
import { Public } from '../security/is_public.meta';
import { PaginationUserDto } from 'src/dto/pagination.dto';
const Tag: string = 'user'
@Controller(Tag)
@ApiTags(Tag)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userServide: UserService) { }
  @Get('all')
  @Public()
  getAll(@Query() query:PaginationUserDto) {
    return this.userServide.getAll({query});
  }
  @Get('by_id/:id')

  getById(@Param('id') id: number) {
    return this.userServide.getById(id);
  }
  @Post('create')
  create(@Body() body: UserDto) {
    return this.userServide.create(body);
  }

  @Patch('by_id/:id')
  updateById(@Param('id') id: number, @Body() body: UserUpdateDto) {
    return this.userServide.updateById({ id, body });
  }
}
