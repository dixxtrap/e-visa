import { VisaType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsValidBooleanOptionalApi } from "src/decorateur/valid_boolean";
import { IsValidNumberApi, IsValidNumberOptionnalApi } from "src/decorateur/valid_number";
import { IsValidStringApi, IsValidStringOptionalApi } from "src/decorateur/valid_string";
import { IsValidStringNumberApi, IsValidStringNumberOptionalApi } from "src/decorateur/valid_string_number";

export class VisaTypeDto implements Partial<VisaType> {
  @IsValidStringApi()
  name: string;
  @IsValidBooleanOptionalApi({apiPropertyOptions:{required:false}})
  isActive?: boolean;
  @IsValidNumberApi({apiPropertyOptions:{type:Number}})
  amount: Decimal;
  @IsValidStringOptionalApi({apiPropertyOptions:{required:false}})
  comment: string;

}
export class VisaTypeUpdateDto implements Partial<VisaType> {
    @IsValidStringOptionalApi({apiPropertyOptions:{required:false}})
    name?: string;
    @IsValidBooleanOptionalApi({apiPropertyOptions:{required:false}})
    isActive?: boolean;
  @IsValidNumberOptionnalApi({ apiPropertyOptions: { required:false, type: Number } })
    amount?: Decimal;
    @IsValidStringOptionalApi({apiPropertyOptions:{required:false}})
    comment?: string;

  }
