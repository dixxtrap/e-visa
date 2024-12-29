import { $Enums, Permission } from 'prisma/types';
export declare class PermissionDto implements Partial<Permission> {
    code?: string;
    byId?: number;
    action?: $Enums.PermissionActionEnum;
    moduleId?: number;
    comment?: string;
}
