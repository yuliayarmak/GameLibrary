import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.create.dto';
import { LoginUserDto } from './dto/user-login.dto';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findOne(options: any): Promise<UserDto>;
    findByLogin({ username, password }: LoginUserDto): Promise<UserDto>;
    findByPayload({ username }: any): Promise<UserDto>;
    create(userDto: CreateUserDto): Promise<UserDto>;
    private _sanitizeUser;
}
