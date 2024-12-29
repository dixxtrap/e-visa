import { PermissionDto } from './permission.dto';
import { Role } from 'prisma/types';
export declare class RoleDto implements Partial<Role> {
    name: string;
    comment: string;
    byId: number;
    permissiuon: PermissionDto;
}
