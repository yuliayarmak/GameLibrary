import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Rating } from './rating.entity';
import { Developer } from './developer.entity';
import { Comment } from './comment.entity';

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  platforms: string;

  @Column()
  year: string;

  @Column()
  aboutGame: string;

  @Column({ default: 'qweeqw' })
  img: string;

  @CreateDateColumn()
  createdDate: string;

  @OneToMany(() => Rating, (rating) => rating.game)
  @JoinColumn()
  rating: Rating;

  @ManyToOne(() => Developer, (developer) => developer.game)
  @JoinColumn()
  developer: Developer;

  @OneToMany(() => Comment, (comment) => comment.game)
  @JoinColumn()
  comment: Comment[];
}
