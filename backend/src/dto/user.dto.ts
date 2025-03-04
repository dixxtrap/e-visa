

import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Allow, IsOptional } from 'class-validator';
import { IsValidEmailApi } from 'src/decorateur/valid_email';
import { IsValidNumberOptionnalApi } from 'src/decorateur/valid_number';
import { IsValidPhoneApi, IsValidPhoneOptionalApi } from 'src/decorateur/valid_phone';
import { IsValidStringApi, IsValidStringOptionalApi } from 'src/decorateur/valid_string';
import { IsValidStringNumberOptionalApi } from 'src/decorateur/valid_string_number';
import { LoginDto, LoginUpdateDto } from './login.dto';

export class UserDto implements Partial<User> {
  @IsValidStringApi()
  displayname: string;
  @IsValidStringApi()
  address: string;
  @IsValidStringOptionalApi()
  password: string;
  @IsValidPhoneApi()
  phone: string;
  @IsValidEmailApi()
  email: string;
  @ApiProperty()
  @Allow()
  @IsOptional()
  login?:LoginUpdateDto

}

export class UserUpdateDto extends UserDto {
  @IsValidStringOptionalApi()
  displayname: string;
  @IsValidPhoneOptionalApi()
  phone: string;
  @IsValidStringOptionalApi()
  address: string;
  @ApiProperty()
  @Allow()
  @IsOptional()
  login?:LoginUpdateDto
}
