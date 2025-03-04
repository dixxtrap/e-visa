import { Role } from '@prisma/client';
export declare class RoleDto implements Partial<Role> {
    name: string;
    isActive?: boolean;
    comment: string;
    byId: number;
}
export declare class RoleUpdateDto implements Partial<RoleDto> {
    name: string;
    isActive?: boolean;
    comment: string;
    permissionIds: number[];
}
