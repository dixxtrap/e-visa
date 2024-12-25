import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userServide;
    constructor(userServide: UserService);
    create(body: Prisma.UserCreateInput): Promise<({
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
    getAll(body: Prisma.UserCreateInput): Promise<({
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
}
