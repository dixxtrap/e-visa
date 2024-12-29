import { User } from 'prisma/types';
export declare class UserDto implements Partial<User> {
    displayname: string;
    password: string;
    phone: string;
    email: string;
    roleId: number;
    gymId: number;
}
