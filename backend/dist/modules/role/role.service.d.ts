import { DatabaseService } from '../database/database.service';
import { RoleDto } from 'src/dto/role.dto';
import { OnModuleInit } from '@nestjs/common';
export declare class RoleService implements OnModuleInit {
    private readonly db;
    constructor(db: DatabaseService);
    onModuleInit(): void;
    createAdminRole(): Promise<void>;
    getAll(): import("prisma/types").Prisma.PrismaPromise<{
        name: string;
        id: number;
        comment: string | null;
        byId: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        isActive: boolean;
    }[]>;
    create(body: RoleDto): import("prisma/types").Prisma.Prisma__RoleClient<{
        name: string;
        id: number;
        comment: string | null;
        byId: number | null;
        createdAt: Date | null;
        updatedAt: Date | null;
        isActive: boolean;
    }, never, import("prisma/types/runtime/library").DefaultArgs>;
}
