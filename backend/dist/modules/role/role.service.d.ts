import { DatabaseService } from '../database/database.service';
import { RoleDto, RoleUpdateDto } from 'src/dto/role.dto';
import { OnModuleInit } from '@nestjs/common/interfaces/hooks';
import { BaseResponse } from 'src/utils/base_response';
import { PaginationSearchDto } from 'src/dto/pagination.dto';
export declare class RoleService implements OnModuleInit {
    private readonly db;
    constructor(db: DatabaseService);
    onModuleInit(): void;
    createAdminRole(): Promise<void>;
    update({ body, id }: {
        body: RoleUpdateDto;
        id: number;
    }): Promise<never>;
    getAll({ query }: {
        query: PaginationSearchDto;
    }): Promise<BaseResponse<({
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
    getById({ id }: {
        id: number;
    }): Promise<BaseResponse<{
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
}
