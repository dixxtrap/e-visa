import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
import { ParamIdDto } from 'src/dto/id_param';
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
        address: string | null;
        loginId: number | null;
    }) | {
        meta: any;
        messages: string;
    }>;
    getById(param: ParamIdDto): Promise<Omit<{
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
