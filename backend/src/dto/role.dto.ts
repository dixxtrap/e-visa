import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'prisma/types';

export class RoleDto implements Partial<Role> {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  comment: string;
  @IsNumber()
  @ApiProperty()
  @IsOptional()
  byId: number;
}

export class RoleUpdateDto extends RoleDto {
  @IsOptional()
  name: string;
  @ApiProperty({ type: () => Number, isArray: true })
  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  permissionIds: number[];
}
