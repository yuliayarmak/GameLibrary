import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingModule } from './rating/rating.module';
import { CommentsModule } from './comments/comments.module';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    RatingModule,
    CommentsModule,
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
