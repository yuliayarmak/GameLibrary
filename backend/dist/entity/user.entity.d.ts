import { BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';
import { Rating } from './rating.entity';
export declare class User extends BaseEntity {
    id: string;
    password: string;
    email: string;
    token: string;
    name: string;
    surname: string;
    role: string;
    createdDate: string;
    comment: Comment[];
    rating: Rating[];
}
