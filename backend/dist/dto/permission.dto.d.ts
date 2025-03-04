import { $Enums, Permission } from '@prisma/client';
export declare class PermissionDto implements Partial<Permission> {
    code: string;
    action: $Enums.PermissionActionEnum;
    moduleId: number;
    comment?: string;
}
