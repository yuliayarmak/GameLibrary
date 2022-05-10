import { CreateUserDto } from '../entity/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { UserService } from '../entity/user.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../entity/dto/user-login.dto';
import { UserDto } from '../entity/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    register(userDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    validateUser(payload: JwtPayload): Promise<UserDto>;
    private _createToken;
}
