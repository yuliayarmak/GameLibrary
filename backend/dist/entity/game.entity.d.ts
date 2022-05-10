import { BaseEntity } from 'typeorm';
import { Rating } from './rating.entity';
import { Developer } from './developer.entity';
import { Comment } from './comment.entity';
export declare class Game extends BaseEntity {
    id: number;
    name: string;
    type: string;
    platforms: string;
    year: string;
    aboutGame: string;
    img: string;
    createdDate: string;
    rating: Rating;
    developer: Developer;
    comment: Comment[];
}
