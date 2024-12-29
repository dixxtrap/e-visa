import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
export declare class UserController {
    private readonly userServide;
    constructor(userServide: UserService);
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
    getById(): void;
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
