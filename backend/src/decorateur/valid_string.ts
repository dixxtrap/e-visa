import { applyDecorators } from "@nestjs/common/decorators/core/apply-decorators";
import { ApiProperty, ApiPropertyOptions } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsNotEmpty, IsOptional, IsString, ValidationOptions } from "class-validator";

  type Option={apiPropertyOptions?:ApiPropertyOptions, validationOptions?:ValidationOptions}
export const  IsValidStringApi=(option?:Option)=> {
    return applyDecorators(ApiProperty(option?.apiPropertyOptions), IsString(option?.validationOptions));
  }


  export const  IsValidStringOptionalApi=(option?:Option)=> {
    return applyDecorators(IsValidStringApi(option), IsOptional(option?.validationOptions));
  }

  export const  IsValidStringRequiredApi=(option?:Option)=> {
    return applyDecorators(IsValidStringApi(option), IsNotEmpty(option?.validationOptions));
  }