import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/entity/game.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { Comment } from 'src/entity/comment.entity';
import { Rating } from 'src/entity/rating.entity';
import { Developer } from 'src/entity/developer.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  rand = () => {
    return Math.random().toString(36).substr(2);
  };

  token = () => {
    return this.rand() + this.rand();
  };

  async getAllGames() {
    return await this.gameRepository.find({
      relations: ['developer', 'rating'],
    });
  }

  async getAllDevelopers() {
    return await this.developerRepository.find({
      relations: ['game'],
    });
  }

  async register(registerData) {
    console.log(registerData);
    const newUser = new User();
    newUser.name = registerData.values.name;
    newUser.surname = registerData.values.surname;
    newUser.email = registerData.values.email;
    newUser.password = registerData.values.password;
    newUser.token = this.token();
    await newUser.save();
    return newUser;
  }

  async login(loginData) {
    const user = await this.userRepository.findOne({
      where: {
        email: loginData.values.email,
        password: loginData.values.password,
      },
    });
    return user ? user : false;
  }

  async getComments(gameId) {
    const comments = await this.commentRepository.find({
      relations: ['game', 'user'],
      where: {
        game: {
          id: gameId.id,
        },
      },
    });
    return comments;
  }

  async getOneGame(gameId) {
    const game = await this.gameRepository.findOne({
      relations: [
        'developer',
        'comment',
        'comment.user',
        'rating.user',
        'rating',
      ],
      where: {
        id: gameId.id,
      },
    });
    return game;
  }

  async editGame(gameId, data) {
    const game = await this.gameRepository.findOne({
      relations: [
        'developer',
        'comment',
        'comment.user',
        'rating.user',
        'rating',
      ],
      where: {
        id: gameId.id,
      },
    });
    game.name = data.name;
    game.platforms = data.platforms;
    game.img = data.img;
    game.type = data.type;
    game.year = data.year;
    game.aboutGame = data.aboutGame;
    game.save();
    return game;
  }

  async getOneDeveloper(developerId) {
    const developer = await this.developerRepository.findOne({
      where: {
        id: developerId.id,
      },
    });
    return developer;
  }

  async addNewComment(commentData) {
    console.log(commentData);
    const newComment = new Comment();
    newComment.user = commentData.requestData.userId;
    newComment.game = commentData.requestData.gameId;
    newComment.message = commentData.requestData.value;
    await newComment.save();

    const comments = await this.commentRepository.find({
      relations: ['game', 'user'],
      where: {
        game: {
          id: newComment.game,
        },
      },
    });
    return comments;
  }

  async addNewRating(ratingData) {
    console.log(ratingData);
    const isExistRate = await this.ratingRepository.findOne({
      where: {
        game: {
          id: ratingData.gameId,
        },
        user: {
          id: ratingData.userId,
        },
      },
    });
    if (isExistRate) {
      console.log('Exist');
      isExistRate.rating = ratingData.value;
      await isExistRate.save();
    } else {
      const newRating = new Rating();
      newRating.game = ratingData.gameId;
      newRating.user = ratingData.userId;
      newRating.rating = ratingData.value;
      await newRating.save();
    }
    return true;
  }

  async getGameRate(gameId, userId) {
    console.log('gameId ' + gameId);
    console.log('userId ' + userId);
    const rating = await this.ratingRepository.findOne({
      relations: ['game', 'user'],
      where: {
        game: {
          id: gameId,
        },
        user: {
          id: userId,
        },
      },
    });
    console.log(rating);
    console.log('RATIIIINg');
    return rating ? rating.rating : 0;
  }
}
