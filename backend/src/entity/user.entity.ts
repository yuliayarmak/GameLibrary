import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { Rating } from './rating.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  token: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ default: '2' })
  role: string;

  @CreateDateColumn()
  createdDate: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comment: Comment[];

  @OneToMany(() => Rating, (rating) => rating.user)
  rating: Rating[];
}
