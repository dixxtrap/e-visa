import { LoginDto } from "./login";

export interface UserDto {
    displayname?: String,
    phone?: String,
    address?: String,

}

export interface SignupDto extends UserDto{
    password: string;
    confirmPassword?: string;
}
