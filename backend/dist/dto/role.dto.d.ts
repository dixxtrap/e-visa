import { Role } from 'prisma/types';
export declare class RoleDto implements Partial<Role> {
    name: string;
    comment: string;
    byId: number;
}
export declare class RoleUpdateDto extends RoleDto {
    name: string;
    permissionIds: number[];
}
