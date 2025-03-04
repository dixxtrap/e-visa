import { Controller } from '@nestjs/common/decorators/core/controller.decorator';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Param, Res } from '@nestjs/common';
import {Response} from "express"
@ApiTags("app")
@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("file/:path")
  getFiles(@Param("path") path :string, @Res() res: Response) {
    const file = createReadStream(join(process.cwd(), path));
    file.pipe(res);
  }
}
