import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Permission } from 'prisma/types';
import { IsEnum } from 'class-validator';
import { IsNotEmpty } from 'class-validator/types/decorator/common/IsNotEmpty';
import { IsNumber } from 'class-validator/types/decorator/typechecker/IsNumber';
import { IsString } from 'class-validator/types/decorator/typechecker/IsString';

export class PermissionDto implements Partial<Permission> {
  @IsNotEmpty()
  @IsString()
  code?: string;
  @IsNumber()
  byId?: number;
  @IsEnum($Enums.PermissionActionEnum)
  action?: $Enums.PermissionActionEnum;
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  moduleId?: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  comment?: string;
}
