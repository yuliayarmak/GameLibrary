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
exports.RecordsController = void 0;
const common_1 = require("@nestjs/common");
const records_service_1 = require("./records.service");
let RecordsController = class RecordsController {
    constructor(recordsService) {
        this.recordsService = recordsService;
    }
    getAllGames() {
        return this.recordsService.getAllGames();
    }
    getAllDevelopers() {
        return this.recordsService.getAllDevelopers();
    }
    register(registerData) {
        return this.recordsService.register(registerData);
    }
    login(loginData) {
        return this.recordsService.login(loginData);
    }
    getOneGame(id) {
        return this.recordsService.getOneGame(id);
    }
    getOneDeveloper(id) {
        return this.recordsService.getOneDeveloper(id);
    }
    getComments(id) {
        return this.recordsService.getComments(id);
    }
    editGame(gameData, id) {
        return this.recordsService.editGame(id, gameData.values);
    }
    addNewComment(commentData) {
        return this.recordsService.addNewComment(commentData);
    }
    addNewRating(ratingData) {
        return this.recordsService.addNewRating(ratingData.requestData);
    }
    getGameRating(gameId, userId) {
        console.log(gameId);
        console.log(userId);
        return this.recordsService.getGameRate(gameId, userId);
    }
};
__decorate([
    (0, common_1.Get)('/all-games'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getAllGames", null);
__decorate([
    (0, common_1.Get)('/all-developers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getAllDevelopers", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/game/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getOneGame", null);
__decorate([
    (0, common_1.Get)('/developer/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getOneDeveloper", null);
__decorate([
    (0, common_1.Get)('/comments/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getComments", null);
__decorate([
    (0, common_1.Post)('/game/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "editGame", null);
__decorate([
    (0, common_1.Post)('/comments/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "addNewComment", null);
__decorate([
    (0, common_1.Post)('/rating/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "addNewRating", null);
__decorate([
    (0, common_1.Get)('/rating/:gameId/:userId'),
    __param(0, (0, common_1.Param)('gameId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getGameRating", null);
RecordsController = __decorate([
    (0, common_1.Controller)('records'),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], RecordsController);
exports.RecordsController = RecordsController;
//# sourceMappingURL=records.controller.js.map