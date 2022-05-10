import { BaseEntity } from 'typeorm';
import { Game } from './game.entity';
import { User } from './user.entity';
export declare class Rating extends BaseEntity {
    id: number;
    rating: string;
    createdDate: string;
    game: Game;
    user: User;
}
