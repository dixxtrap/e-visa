
import { IsValidStringOptionalApi } from "src/decorateur/valid_string";
import { IsValidStringNumberApi } from "src/decorateur/valid_string_number";


export class PaginationDto {
  @IsValidStringNumberApi()
  page: number;
  @IsValidStringNumberApi()
  perpage: number;
}
export class PaginationSearchDto extends PaginationDto {
  @IsValidStringOptionalApi({ apiPropertyOptions: { required: false } })
  search: string;
}
export class PaginationUserDto extends PaginationDto {
  @IsValidStringOptionalApi({ apiPropertyOptions: { required: false } })
  displayname: string;
  @IsValidStringOptionalApi({ apiPropertyOptions: { required: false } })
  phone: string;
  @IsValidStringOptionalApi({ apiPropertyOptions: { required: false } })
  username: string;
}

export const getPaginationParams = (query: PaginationDto) => ({
  skip: (Number(query.page) - 1) * Number(query.perpage),
  take: Number(query.perpage),
});
