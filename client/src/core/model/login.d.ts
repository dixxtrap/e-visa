import { RoleDto } from "./role"
import { UserDto } from "./user"

export interface LoginDto {
    username: String,
    password: String,
    type: "USER" | "CUSTOMER"
    role?: RoleDto,
    customer?: UserDto
}
