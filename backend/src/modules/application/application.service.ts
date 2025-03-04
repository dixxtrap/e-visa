import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DatabaseService } from '../database/database.service';
import { CurrentUserDto, LoginDto } from 'src/dto/login.dto';
import { PassportDto } from 'src/dto/passport.dto';
import { excludeFields } from 'src/utils/exclude_key';
import { throwSuccess } from 'src/exception/ws_message';
import { BaseResponse } from 'src/utils/base_response';
import { ContactsDto } from 'src/dto/contacts.dto';
import { RoadTripInfoDto } from 'src/dto/road_trip_info.dto';

@Injectable()
export class ApplicationService {
  constructor(private readonly db: DatabaseService) {}
  getPendingApplicationRequest({ by }: { by: CurrentUserDto }) {
    return this.getPanding({ by }).then(BaseResponse.success);
  }
  getPanding({ by }: { by: CurrentUserDto }) {
    return this.db.application.findFirstOrThrow({
      include: { passport: true, contacts: true, roadTripInfo: true },
    });
  }
  addSelfi({ by, file }: { by: CurrentUserDto; file: Express.Multer.File }) {
    this.getPanding({ by }).then((val) => {
      return this.db.passport.update({
        where: { id: val.passportid },
        data: {
          selfPath: file.destination,
        },
      });
    });
  }
  createApplicatiuon({
    by,
    body,
    file,
  }: {
    by: CurrentUserDto;
    body: PassportDto;
    file: Express.Multer.File;
  }) {
    console.log(file);
    return this.db.passport
      .create({
        data: {
          ...excludeFields(body, ['file']),
          customerid: by.id,
          selfPath: '',
          path: file.path,
        },
      })
      .then((val) => {
        return this.db.application.create({
          data: {
            customerId: by.id,
            passportid: val.id,
            visaTypeId: 1,
          },
        });
      })
      .then(throwSuccess);
  }
  addContact({ by, body }: { by: CurrentUserDto; body: ContactsDto }) {
    return this.getPanding({ by }).then((val) => {
      return this.db.application
        .update({
          where: { id: val.id },
          data: {
            ...excludeFields(body, ['contacts']),
            contacts: {
              createMany: { data: body.contacts.map((e) => ({ ...e })) },
            },
          },
        })
        .then(throwSuccess);
    });
  }
  addRoadTripInfo({ by, body }: { by: CurrentUserDto; body: RoadTripInfoDto }) {
    return this.getPanding({ by })
      .then((val) => {
        return this.db.roadTripInfo.create({
          data: { ...body, applicationId:val.id ,  },
        });
      })
      .then(throwSuccess);
  }
}
