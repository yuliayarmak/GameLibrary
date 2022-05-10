import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as config from 'config';
import { User } from './entity/user.entity';
import { Developer } from './entity/developer.entity';
import { Rating } from './entity/rating.entity';
import { Comment } from './entity/comment.entity';
import { Game } from './entity/game.entity';

export const ApiEntities = [User, Developer, Rating, Comment, Game];

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'kpi',
  username: 'postgres',
  password: 'Kutabare6',
  entities: ApiEntities,
  logging: ['query', 'error'],
  synchronize: true,
};
