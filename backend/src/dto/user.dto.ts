import { ApiProperty } from '@nestjs/swagger';
import {
  Allow,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
} from 'class-validator';
import { User } from 'prisma/types';

export class UserDto implements Partial<User> {
  @IsNotEmpty()
  @ApiProperty()
  displayname: string;
  @Allow()
  @ApiProperty()
  password: string;
  @IsPhoneNumber()
  @ApiProperty()
  phone: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsNumber()
  @ApiProperty()
  roleId: number;
}
