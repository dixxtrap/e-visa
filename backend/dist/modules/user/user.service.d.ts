import { DatabaseService } from '../database/database.service';
import { UserDto, UserUpdateDto } from 'src/dto/user.dto';
import { CryptoService } from 'src/utils/crypto_service';
import { OnModuleInit } from '@nestjs/common/interfaces/hooks';
import { ConfigService } from '@nestjs/config';
import { BaseResponse } from 'src/utils/base_response';
import { PaginationUserDto } from 'src/dto/pagination.dto';
import { EmailerService } from '../mailer/mailer.service';
export declare class UserService implements OnModuleInit {
    private readonly db;
    private readonly crypto;
    private readonly config;
    private readonly mailer;
    constructor(db: DatabaseService, crypto: CryptoService, config: ConfigService, mailer: EmailerService);
    onModuleInit(): void;
    createAdminUser(): Promise<{
        phone: string;
        email: string;
        address: string | null;
        displayname: string;
        loginId: number;
    }>;
    create(body: UserDto): Promise<never>;
    updateById({ body, id }: {
        body: UserUpdateDto;
        id: number;
    }): Promise<never>;
    getById(id: number): Promise<BaseResponse<{} & {
        phone: string;
        email: string;
        address: string | null;
        displayname: string;
        loginId: number;
    }>>;
    getAll({ query }: {
        query: PaginationUserDto;
    }): Promise<BaseResponse<({
        login: {
            role: {
                id: number;
                isActive: boolean;
                createdAt: Date | null;
                name: string;
                updatedAt: Date | null;
                comment: string | null;
                byId: number | null;
            };
        } & {
            id: number;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.LoginEnum;
            username: string;
            roleId: number | null;
            isBlocked: boolean;
            isArchived: boolean;
        };
    } & {
        phone: string;
        email: string;
        address: string | null;
        displayname: string;
        loginId: number;
    })[]>>;
}
