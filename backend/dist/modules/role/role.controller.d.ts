import { RoleService } from './role.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
import { PaginationSearchDto } from 'src/dto/pagination.dto';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    getAll(query: PaginationSearchDto): Promise<import("../../utils/base_response").BaseResponse<({
        _count: {
            login: number;
            rolePermission: number;
        };
        rolePermission: {
            permission: {
                id: number;
                code: string;
            };
        }[];
    } & {
        id: number;
        isActive: boolean;
        createdAt: Date | null;
        name: string;
        updatedAt: Date | null;
        comment: string | null;
        byId: number | null;
    })[]>>;
    getOne(id: number): Promise<import("../../utils/base_response").BaseResponse<{
        rolePermission: {
            roleId: number;
            permissionId: number;
        }[];
    } & {
        id: number;
        isActive: boolean;
        createdAt: Date | null;
        name: string;
        updatedAt: Date | null;
        comment: string | null;
        byId: number | null;
    }>>;
    create(body: RoleDto): Promise<never>;
    update(id: number, body: RoleUpdateDto): Promise<never>;
}
