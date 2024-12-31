import { DatabaseService } from '../database/database.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
import { OnModuleInit } from '@nestjs/common';
import { BaseResponse } from 'src/utils/base_response';
export declare class RoleService implements OnModuleInit {
    private readonly db;
    constructor(db: DatabaseService);
    onModuleInit(): void;
    createAdminRole(): Promise<void>;
    update({ body, id }: {
        body: RoleUpdateDto;
        id: number;
    }): Promise<never>;
    getAll(): Promise<BaseResponse<({
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
    create(body: RoleDto): import("prisma/types").Prisma.Prisma__RoleClient<{
        name: string;
        id: number;
        createdAt: Date | null;
        updatedAt: Date | null;
        comment: string | null;
        byId: number | null;
        isActive: boolean;
    }, never, import("prisma/types/runtime/library").DefaultArgs>;
}
