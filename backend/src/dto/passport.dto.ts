import { ApiProperty } from '@nestjs/swagger';
import { Passport } from '@prisma/client';
import { Allow } from 'class-validator';
import { IsValidStringApi } from 'src/decorateur/valid_string';

export class PassportDto implements Partial<Passport> {
  @IsValidStringApi()
  displayname: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  @Allow()
  file: File;
  @IsValidStringApi()
  reference: string;
  @IsValidStringApi()
  validity: Date;
  @IsValidStringApi()
  birthdate: Date;
}
