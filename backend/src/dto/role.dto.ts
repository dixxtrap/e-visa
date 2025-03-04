

import { Role } from '@prisma/client';
import { IsValidStringApi, IsValidStringOptionalApi } from 'src/decorateur/valid_string';
import { IsValidNumberOptionnalApi, IsValidNumberOptionnalArrayApi } from 'src/decorateur/valid_number';
import { IsValidBooleanOptionalApi } from 'src/decorateur/valid_boolean';

export class RoleDto implements Partial<Role> {
  @IsValidStringApi()
  name: string;
  @IsValidBooleanOptionalApi()
  isActive?: boolean;
  @IsValidStringOptionalApi()
  comment: string;
  @IsValidNumberOptionnalApi()
  byId: number;
}

export class RoleUpdateDto implements Partial<RoleDto> {
  @IsValidStringOptionalApi({ apiPropertyOptions: { required: false } })
  name: string;
  @IsValidBooleanOptionalApi({ apiPropertyOptions: { required: false } })
  isActive?: boolean;
  @IsValidStringOptionalApi()
  comment: string;
  @IsValidNumberOptionnalArrayApi({
    apiPropertyOptions: { type: () => Number, isArray: true, required: false },
    validationOptions: { each: true },
  })
  permissionIds: number[];
}
