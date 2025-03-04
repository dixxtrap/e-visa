import { ApiController } from 'src/decorateur/api_controller';
import { DatabaseService } from '../database/database.service';
import { CurrentUserDto, LoginDto } from 'src/dto/login.dto';
import { PassportDto } from 'src/dto/passport.dto';
import { ApplicationService } from './application.service';
import {
  Get,
  Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CurrentUser } from 'src/decorateur/current_user';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { ApiConsumes } from '@nestjs/swagger/dist/decorators/api-consumes.decorator';
import { ApiBody } from '@nestjs/swagger/dist/decorators/api-body.decorator';
import {
  Body,
  UploadedFile,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { FileUploadDto } from 'src/dto/file_upload.dto';
import { fileInterCeptor } from 'src/utils/multer.config';
import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { ContactsDto } from 'src/dto/contacts.dto';
import { RoadTripInfoDto } from 'src/dto/road_trip_info.dto';

@ApiController('application')
export class ApplicationController {
  constructor(private readonly service: ApplicationService) {}
  @Post('/create')
  @UseInterceptors(fileInterCeptor(''))
  @ApiConsumes('multipart/form-data')
  create(
    @Body() body: PassportDto,
    @CurrentUser() by: CurrentUserDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.service.createApplicatiuon({ by, body, file });
  }
  @Post('/contact')
  addContact(@Body() body: ContactsDto, @CurrentUser() by: CurrentUserDto) {
    return this.service.addContact({ body, by });
  }
  @Post('/road_trip_info')
  roadTripInfo(
    @Body() body: RoadTripInfoDto,
    @CurrentUser() by: CurrentUserDto,
  ) {
      console.log(body)
    return this.service.addRoadTripInfo({ body, by });
  }
  @Get('/pending')
  getPending(@CurrentUser() by: CurrentUserDto) {
    return this.service.getPendingApplicationRequest({ by });
  }
}
