import { LoginDto } from "./login";

export interface UserDto {
  readonly byId?: number;
  readonly loginId?: number;
  displayname?: string;
  phone?: string;
  email?: string;
  address?: string;
  login?: LoginDto;
}
