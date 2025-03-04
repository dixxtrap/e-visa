import { $Enums, Login } from "@prisma/client";
import { IsValidBooleanOptionalApi } from "src/decorateur/valid_boolean";
import { IsValidEnumApi } from "src/decorateur/valid_enum";
import { IsValidStringApi } from "src/decorateur/valid_string";
import { IsValidStringNumberOptionalApi } from "src/decorateur/valid_string_number";
import { AddIdDto } from "./id_param";

export class LoginDto {

  @IsValidStringApi()
  username: string;
  @IsValidStringApi()
  password: string;
  @IsValidEnumApi<$Enums.LoginEnum>(Object.values($Enums.LoginEnum))
  type?: $Enums.LoginEnum;
}
export class LoginUpdateDto implements Partial<Login> {
  @IsValidBooleanOptionalApi()
  isActive?: boolean;
  @IsValidBooleanOptionalApi()
  isArchived?: boolean;
  @IsValidBooleanOptionalApi()
  isBlocked?: boolean;
  @IsValidStringNumberOptionalApi()
  roleId?: number;
}


export type CurrentUserDto = AddIdDto & LoginDto;
