import { DatabaseService } from '../database/database.service';
import { UserDto } from 'src/dto/user.dto';
import { CryptoService } from 'src/utils/crypto_service';
export declare class UserService {
    private db;
    private crypto;
    constructor(db: DatabaseService, crypto: CryptoService);
    create(body: UserDto): Promise<({
        login: {
            id: number;
            password: string;
            roleId: number | null;
            type: import("prisma/types").$Enums.LoginEnum;
            username: string;
        };
    } & {
        id: number;
        displayname: string;
        phone: string;
        email: string;
        address: string | null;
        loginId: number | null;
    }) | {
        meta: any;
        messages: string;
    }>;
    getById(id: number): Promise<Omit<{
        id: number;
        displayname: string;
        phone: string;
        email: string;
        address: string | null;
        loginId: number | null;
    }, "loginId">>;
    getAll(): import("prisma/types").Prisma.PrismaPromise<({
        login: {
            role: {
                name: string;
                id: number;
            };
            username: string;
        };
    } & {
        id: number;
        displayname: string;
        phone: string;
        email: string;
        address: string | null;
        loginId: number | null;
    })[]>;
}
