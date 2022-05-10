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
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const game_entity_1 = require("../entity/game.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entity/user.entity");
const comment_entity_1 = require("../entity/comment.entity");
const rating_entity_1 = require("../entity/rating.entity");
const developer_entity_1 = require("../entity/developer.entity");
let RecordsService = class RecordsService {
    constructor(gameRepository, userRepository, commentRepository, ratingRepository, developerRepository) {
        this.gameRepository = gameRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
        this.ratingRepository = ratingRepository;
        this.developerRepository = developerRepository;
        this.rand = () => {
            return Math.random().toString(36).substr(2);
        };
        this.token = () => {
            return this.rand() + this.rand();
        };
    }
    async getAllGames() {
        return await this.gameRepository.find({
            relations: ['developer', 'rating'],
        });
    }
    async getAllDevelopers() {
        return await this.developerRepository.find({
            relations: ['game'],
        });
    }
    async register(registerData) {
        console.log(registerData);
        const newUser = new user_entity_1.User();
        newUser.name = registerData.values.name;
        newUser.surname = registerData.values.surname;
        newUser.email = registerData.values.email;
        newUser.password = registerData.values.password;
        newUser.token = this.token();
        await newUser.save();
        return newUser;
    }
    async login(loginData) {
        const user = await this.userRepository.findOne({
            where: {
                email: loginData.values.email,
                password: loginData.values.password,
            },
        });
        return user ? user : false;
    }
    async getComments(gameId) {
        const comments = await this.commentRepository.find({
            relations: ['game', 'user'],
            where: {
                game: {
                    id: gameId.id,
                },
            },
        });
        return comments;
    }
    async getOneGame(gameId) {
        const game = await this.gameRepository.findOne({
            relations: [
                'developer',
                'comment',
                'comment.user',
                'rating.user',
                'rating',
            ],
            where: {
                id: gameId.id,
            },
        });
        return game;
    }
    async editGame(gameId, data) {
        const game = await this.gameRepository.findOne({
            relations: [
                'developer',
                'comment',
                'comment.user',
                'rating.user',
                'rating',
            ],
            where: {
                id: gameId.id,
            },
        });
        game.name = data.name;
        game.platforms = data.platforms;
        game.img = data.img;
        game.type = data.type;
        game.year = data.year;
        game.aboutGame = data.aboutGame;
        game.save();
        return game;
    }
    async getOneDeveloper(developerId) {
        const developer = await this.developerRepository.findOne({
            where: {
                id: developerId.id,
            },
        });
        return developer;
    }
    async addNewComment(commentData) {
        console.log(commentData);
        const newComment = new comment_entity_1.Comment();
        newComment.user = commentData.requestData.userId;
        newComment.game = commentData.requestData.gameId;
        newComment.message = commentData.requestData.value;
        await newComment.save();
        const comments = await this.commentRepository.find({
            relations: ['game', 'user'],
            where: {
                game: {
                    id: newComment.game,
                },
            },
        });
        return comments;
    }
    async addNewRating(ratingData) {
        console.log(ratingData);
        const isExistRate = await this.ratingRepository.findOne({
            where: {
                game: {
                    id: ratingData.gameId,
                },
                user: {
                    id: ratingData.userId,
                },
            },
        });
        if (isExistRate) {
            console.log('Exist');
            isExistRate.rating = ratingData.value;
            await isExistRate.save();
        }
        else {
            const newRating = new rating_entity_1.Rating();
            newRating.game = ratingData.gameId;
            newRating.user = ratingData.userId;
            newRating.rating = ratingData.value;
            await newRating.save();
        }
        return true;
    }
    async getGameRate(gameId, userId) {
        console.log('gameId ' + gameId);
        console.log('userId ' + userId);
        const rating = await this.ratingRepository.findOne({
            relations: ['game', 'user'],
            where: {
                game: {
                    id: gameId,
                },
                user: {
                    id: userId,
                },
            },
        });
        console.log(rating);
        console.log('RATIIIINg');
        return rating ? rating.rating : 0;
    }
};
RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(game_entity_1.Game)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(3, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __param(4, (0, typeorm_1.InjectRepository)(developer_entity_1.Developer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map