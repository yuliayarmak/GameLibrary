import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Game } from 'src/entity/game.entity';
import { Rating } from 'src/entity/rating.entity';
import { Developer } from 'src/entity/developer.entity';
import { Comment } from 'src/entity/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Game, Rating, Developer, Comment])],
  providers: [RecordsService],
  controllers: [RecordsController],
})
export class RecordsModule {}
