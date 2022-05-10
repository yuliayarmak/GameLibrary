import { CreateUserDto } from '../entity/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { AuthService } from './auth.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../entity/dto/user-login.dto';
import { JwtPayload } from './interfaces/payload.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<LoginStatus>;
    testAuth(req: any): Promise<JwtPayload>;
}
