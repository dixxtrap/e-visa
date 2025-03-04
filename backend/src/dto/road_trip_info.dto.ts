import { RoadTripInfo } from "@prisma/client";
import { IsValidDateApi, IsValidDateOptionalApi } from "src/decorateur/valid_date";
import { IsValidStringApi, IsValidStringOptionalApi } from "src/decorateur/valid_string";

export class RoadTripInfoDto implements Partial<RoadTripInfo>{
@IsValidStringApi()
motif: string;
@IsValidStringApi()
arrivalFrom: string;
@IsValidDateApi()
arrivalDate: Date;
@IsValidStringApi()
arrivalLocationType: string;
@IsValidStringApi()
arrivalLocationCompanyName: string;
@IsValidStringApi()
arrivalLocationCompanyIdentify: string;
@IsValidStringOptionalApi()
departureTo?: string;
@IsValidDateOptionalApi()
departureDate?: Date;
@IsValidStringOptionalApi()
departureLocationType?: string;
@IsValidStringOptionalApi()
departureLocationCompanyName?: string;
@IsValidStringOptionalApi()
departureLocationCompanyIdentify?: string; $
@IsValidStringOptionalApi()
address: string;

}
