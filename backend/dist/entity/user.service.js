"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const mapper_1 = require("../utils/mapper");
const utils_1 = require("../utils/utils");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findOne(options) {
        const user = await this.userRepo.findOne(options);
        return (0, mapper_1.toUserDto)(user);
    }
    async findByLogin({ username, password }) {
        const user = await this.userRepo.findOne({ where: { username } });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await (0, utils_1.comparePasswords)(user.password, password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        return (0, mapper_1.toUserDto)(user);
    }
    async findByPayload({ username }) {
        return await this.findOne({ where: { username } });
    }
    async create(userDto) {
        const { username, password, email } = userDto;
        const userInDb = await this.userRepo.findOne({ where: { username } });
        if (userInDb) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userRepo.create({
            password,
            email,
        });
        await this.userRepo.save(user);
        return (0, mapper_1.toUserDto)(user);
    }
    _sanitizeUser(user) {
        delete user.password;
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map