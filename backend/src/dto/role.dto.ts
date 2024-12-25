import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PermissionDto } from './permission.dto';
import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

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