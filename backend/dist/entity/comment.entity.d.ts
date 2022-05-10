import { BaseEntity } from 'typeorm';
import { Game } from './game.entity';
import { User } from './user.entity';
export declare class Comment extends BaseEntity {
    id: number;
    message: string;
    createdDate: string;
    game: Game;
    user: User;
}
