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
        companyId: number | null;
        gymId: number | null;
        loginId: number | null;
    }) | {
        meta: any;
        messages: string;
    }>;
    getAll(): import("prisma/types").Prisma.PrismaPromise<({
        login: {
            username: string;
        };
    } & {
        id: number;
        displayname: string;
        phone: string;
        email: string;
        companyId: number | null;
        gymId: number | null;
        loginId: number | null;
    })[]>;
}
