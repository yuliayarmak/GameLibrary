import { BaseEntity } from 'typeorm';
import { Game } from './game.entity';
export declare class Developer extends BaseEntity {
    id: number;
    name: string;
    img: string;
    about: string;
    createdDate: string;
    game: Game[];
}
