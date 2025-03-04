import { Allow } from 'class-validator';
import { IsValidPhoneApi } from 'src/decorateur/valid_phone';
import { IsValidStringApi } from 'src/decorateur/valid_string';

export class ContactsDto {
  @IsValidStringApi()
  activity: string;
  @IsValidStringApi()
  address: string;
  @IsValidStringApi()
  email: string;
  @IsValidStringApi()
  phone: string;
  @Allow()
  contacts?: ContactDto[];
}
class ContactDto {
  @IsValidStringApi()
  displayname: string;
  @IsValidPhoneApi()
  phone: string;
}
