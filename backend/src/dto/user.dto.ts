import { Allow } from 'class-validator/types/decorator/common/Allow';
import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';
import { IsEmail } from 'class-validator/types/decorator/string/IsEmail';
import { IsPhoneNumber } from 'class-validator/types/decorator/string/IsPhoneNumber';
import { IsNumber } from 'class-validator/types/decorator/typechecker/IsNumber';

export class UserDto {
  @IsNotEmpty()
  displayname: string;
  @Allow()
  @IsPhoneNumber()
  phone: string;
  @IsEmail()
  email: string;
  @IsNumber()
  roleId: number;
  @IsNumber({ allowNaN: true })
  gymId: number;
}
