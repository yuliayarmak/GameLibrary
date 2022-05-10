import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Game } from './game.entity';
import { User } from './user.entity';
@Entity()
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: string;

  @CreateDateColumn()
  createdDate: string;

  @ManyToOne(() => Game, (game) => game.rating)
  game: Game;

  @ManyToOne(() => User, (user) => user.rating)
  user: User;
}
