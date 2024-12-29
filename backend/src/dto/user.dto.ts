import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';
import { Allow } from 'class-validator/types/decorator/decorators';
import { IsEmail } from 'class-validator/types/decorator/string/IsEmail';
import { IsPhoneNumber } from 'class-validator/types/decorator/string/IsPhoneNumber';
import { IsNumber } from 'class-validator/types/decorator/typechecker/IsNumber';
import { User } from 'prisma/types';

export class UserDto implements Partial<User> {
  @IsNotEmpty()
  displayname: string;
  @Allow()
  password: string;
  @IsPhoneNumber()
  phone: string;
  @IsEmail()
  email: string;
  @IsNumber()
  roleId: number;
  @IsNumber({ allowNaN: true })
  gymId: number;
}
