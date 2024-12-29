import { RoleService } from './role.service';
import { RoleDto } from 'src/dto/role.dto';
export declare class RoleController {
    private readonly service;
    constructor(service: RoleService);
    create(body: RoleDto): import("prisma/types").Prisma.Prisma__RoleClient<{
        name: string;
        id: number;
        comment: string | null;
        byId: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        isActive: boolean;
    }, never, import("prisma/types/runtime/library").DefaultArgs>;
    getAll(): import("prisma/types").Prisma.PrismaPromise<{
        name: string;
        id: number;
        comment: string | null;
        byId: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        isActive: boolean;
    }[]>;
    update(body: RoleDto): import("prisma/types").Prisma.Prisma__RoleClient<{
        name: string;
        id: number;
        comment: string | null;
        byId: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        isActive: boolean;
    }, never, import("prisma/types/runtime/library").DefaultArgs>;
}
