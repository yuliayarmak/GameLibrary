import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Game } from './game.entity';
import { User } from './user.entity';
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  createdDate: string;

  @ManyToOne(() => Game, (game) => game.comment)
  @JoinColumn()
  game: Game;

  @ManyToOne(() => User, (user) => user.comment)
  @JoinColumn()
  user: User;
}
