import { ModuleDto } from "./module";

export interface PermissionDto {
  readonly id?: number;
  code?: string;
  action?: string;
  module?: ModuleDto;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
