import { UserService } from './user.service';
import { UserDto, UserUpdateDto } from 'src/dto/user.dto';
import { PaginationUserDto } from 'src/dto/pagination.dto';
export declare class UserController {
    private readonly userServide;
    constructor(userServide: UserService);
    getAll(query: PaginationUserDto): Promise<import("../../utils/base_response").BaseResponse<({
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
    getById(id: number): Promise<import("../../utils/base_response").BaseResponse<{} & {
        phone: string;
        email: string;
        address: string | null;
        displayname: string;
        loginId: number;
    }>>;
    create(body: UserDto): Promise<never>;
    updateById(id: number, body: UserUpdateDto): Promise<never>;
}
