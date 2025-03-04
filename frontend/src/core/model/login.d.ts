import { RoleDto } from "./role";
import { UserDto } from "./user";

export interface LoginDto {
    readonly id?: number;
    username?: string;
    password?: string;
    user?: UserDto;
    role?: RoleDto;
    roleId?: number|string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
    isActive?: boolean;
    isBlocked?: boolean;
    isArchived?: boolean;
    type?: "USER" | "CUSTOMER"
}
