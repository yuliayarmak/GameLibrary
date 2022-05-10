import { RecordsService } from './records.service';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    getAllGames(): Promise<import("../entity/game.entity").Game[]>;
    getAllDevelopers(): Promise<import("../entity/developer.entity").Developer[]>;
    register(registerData: any): Promise<import("../entity/user.entity").User>;
    login(loginData: any): Promise<false | import("../entity/user.entity").User>;
    getOneGame(id: any): Promise<import("../entity/game.entity").Game>;
    getOneDeveloper(id: any): Promise<import("../entity/developer.entity").Developer>;
    getComments(id: any): Promise<import("../entity/comment.entity").Comment[]>;
    editGame(gameData: any, id: any): Promise<import("../entity/game.entity").Game>;
    addNewComment(commentData: any): Promise<import("../entity/comment.entity").Comment[]>;
    addNewRating(ratingData: any): Promise<boolean>;
    getGameRating(gameId: any, userId: any): Promise<string | 0>;
}
