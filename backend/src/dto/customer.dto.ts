import { Customer } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import {  IsValidDateOptionalApi } from "src/decorateur/valid_date";
import { IsValidEmailApi, IsValidEmailOptionalApi } from "src/decorateur/valid_email";
import {  IsValidNumberOptionnalApi } from "src/decorateur/valid_number";
import { IsValidPhoneApi, IsValidPhoneOptionalApi } from "src/decorateur/valid_phone";
import { IsValidStringApi, IsValidStringOptionalApi } from "src/decorateur/valid_string";
import {  LoginUpdateDto } from "./login.dto";
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { Allow } from "class-validator";

export class CustomerDto implements Partial<Customer>{
    @IsValidStringApi()
displayname: string;
@IsValidPhoneApi()
phone: string;
@IsValidStringApi()
address?: string;
@IsValidNumberOptionnalApi({apiPropertyOptions:{type:Number}})
latitude?: Decimal;
@IsValidNumberOptionnalApi({apiPropertyOptions:{type:Number}})
longitude?: Decimal;
@IsValidEmailApi()
email: string;
@IsValidDateOptionalApi()
dateOfBirth?: Date ;
@IsValidStringApi()
password:string;
}


export class CustomerUpdateDto implements Partial<Customer>{
@IsValidStringApi()
displayname: string;
@IsValidPhoneOptionalApi()
phone: string;
@IsValidStringOptionalApi()
address?: string;
@IsValidNumberOptionnalApi({apiPropertyOptions:{type:Number}})
latitude?: Decimal;
@IsValidNumberOptionnalApi({apiPropertyOptions:{type:Number}})
longitude?: Decimal;
@IsValidEmailOptionalApi()
email?: string;
@IsValidDateOptionalApi()
dateOfBirth?: Date;
@ApiProperty({type:LoginUpdateDto})
@Allow()
login:LoginUpdateDto
}
