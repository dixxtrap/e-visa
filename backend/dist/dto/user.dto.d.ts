import { User } from '@prisma/client';
import { LoginUpdateDto } from './login.dto';
export declare class UserDto implements Partial<User> {
    displayname: string;
    address: string;
    password: string;
    phone: string;
    email: string;
    login?: LoginUpdateDto;
}
export declare class UserUpdateDto extends UserDto {
    displayname: string;
    phone: string;
    address: string;
    login?: LoginUpdateDto;
}
