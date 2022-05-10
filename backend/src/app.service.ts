import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createNewUser(body): string {
    return 'Hello World!';
  }

  // генерируется токен который возвращается после логина и в каждом защищенном ,запросе проверяется токен
}
