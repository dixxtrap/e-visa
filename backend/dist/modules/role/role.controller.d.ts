import { RoleService } from './role.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    create(body: RoleDto): import("prisma/types").Prisma.Prisma__RoleClient<{
        name: string;
        id: number;
        createdAt: Date | null;
        updatedAt: Date | null;
        comment: string | null;
        byId: number | null;
        isActive: boolean;
    }, never, import("prisma/types/runtime/library").DefaultArgs>;
    getAll(): Promise<import("../../utils/base_response").BaseResponse<({
        rolePermission: {
            permission: {
                id: number;
                code: string;
            };
        }[];
    } & {
        name: string;
        id: number;
        createdAt: Date | null;
        updatedAt: Date | null;
        comment: string | null;
        byId: number | null;
        isActive: boolean;
    })[]>>;
    update(id: number, body: RoleUpdateDto): Promise<never>;
}
