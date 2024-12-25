import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';
export declare class UserService {
    private db;
    constructor(db: DatabaseService);
    create(body: Omit<Prisma.UserCreateInput, ''>): Promise<({
        login: {
            id: number;
            type: import(".prisma/client").$Enums.LoginEnum;
            username: string;
            password: string;
        };
    } & {
        id: number;
        displayname: string;
        phone: string;
        email: string;
        loginId: number | null;
        roleId: number | null;
        companyId: number | null;
        gymId: number | null;
    }) | {
        meta: any;
        messages: string;
    }>;
    getDefaultResultOrder(): Prisma.PrismaPromise<({
        login: {
            username: string;
        };
    } & {
        id: number;
        displayname: string;
        phone: string;
        email: string;
        loginId: number | null;
        roleId: number | null;
        companyId: number | null;
        gymId: number | null;
    })[]>;
}
