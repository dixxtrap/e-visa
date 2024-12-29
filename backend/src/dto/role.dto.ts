import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PermissionDto } from './permission.dto';

import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'prisma/types';

export class RoleDto implements Partial<Role> {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  comment: string;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  byId: number;
  permissiuon: PermissionDto;
}
