import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { Game } from './game.entity';
@Entity()
export class Developer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  @Column()
  about: string;

  @CreateDateColumn()
  createdDate: string;

  @OneToMany(() => Game, (game) => game.developer)
  game: Game[];
}
