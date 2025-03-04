import { LoginDto } from "./login";
import { RolePermissionDto } from "./role_permission";

export interface RoleDto {
  name?: string;
  comment?: string;
  login?: LoginDto;
  permissionIds?: Array<number|string>;
  rolePermission?: RolePermissionDto[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly byId?: number;
  readonly id?: number;
  readonly _count?:{rolePermission?:number, login?:number}
}
