import { Game } from 'src/entity/game.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Comment } from 'src/entity/comment.entity';
import { Rating } from 'src/entity/rating.entity';
import { Developer } from 'src/entity/developer.entity';
export declare class RecordsService {
    private gameRepository;
    private userRepository;
    private commentRepository;
    private ratingRepository;
    private developerRepository;
    constructor(gameRepository: Repository<Game>, userRepository: Repository<User>, commentRepository: Repository<Comment>, ratingRepository: Repository<Rating>, developerRepository: Repository<Developer>);
    rand: () => string;
    token: () => string;
    getAllGames(): Promise<Game[]>;
    getAllDevelopers(): Promise<Developer[]>;
    register(registerData: any): Promise<User>;
    login(loginData: any): Promise<false | User>;
    getComments(gameId: any): Promise<Comment[]>;
    getOneGame(gameId: any): Promise<Game>;
    editGame(gameId: any, data: any): Promise<Game>;
    getOneDeveloper(developerId: any): Promise<Developer>;
    addNewComment(commentData: any): Promise<Comment[]>;
    addNewRating(ratingData: any): Promise<boolean>;
    getGameRate(gameId: any, userId: any): Promise<string | 0>;
}
