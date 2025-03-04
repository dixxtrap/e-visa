import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Permission } from '@prisma/client';
import { IsValidEnumApi } from 'src/decorateur/valid_enum';
import { IsValidNumberApi } from 'src/decorateur/valid_number';
import { IsValidStringApi, IsValidStringOptionalApi } from 'src/decorateur/valid_string';

export class PermissionDto implements Partial<Permission> {
  @IsValidStringApi()
  code: string;
  @IsValidEnumApi<$Enums.PermissionActionEnum>(Object.values($Enums.PermissionActionEnum))
  action: $Enums.PermissionActionEnum;
  @IsValidNumberApi()
  moduleId: number;
  @IsValidStringOptionalApi()
  comment?: string;
}
