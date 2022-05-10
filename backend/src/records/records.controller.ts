import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get('/all-games')
  getAllGames() {
    return this.recordsService.getAllGames();
  }

  @Get('/all-developers')
  getAllDevelopers() {
    return this.recordsService.getAllDevelopers();
  }

  @Post('/register')
  register(@Body() registerData) {
    return this.recordsService.register(registerData);
  }

  @Post('/login')
  login(@Body() loginData) {
    return this.recordsService.login(loginData);
  }

  @Get('/game/:id')
  getOneGame(@Param() id) {
    return this.recordsService.getOneGame(id);
  }

  @Get('/developer/:id')
  getOneDeveloper(@Param() id) {
    return this.recordsService.getOneDeveloper(id);
  }

  @Get('/comments/:id')
  getComments(@Param() id) {
    return this.recordsService.getComments(id);
  }

  @Post('/game/:id')
  editGame(@Body() gameData, @Param() id) {
    return this.recordsService.editGame(id, gameData.values);
  }

  @Post('/comments/')
  addNewComment(@Body() commentData) {
    return this.recordsService.addNewComment(commentData);
  }

  @Post('/rating/')
  addNewRating(@Body() ratingData) {
    return this.recordsService.addNewRating(ratingData.requestData);
  }

  @Get('/rating/:gameId/:userId')
  getGameRating(@Param('gameId') gameId, @Param('userId') userId) {
    console.log(gameId);
    console.log(userId);
    return this.recordsService.getGameRate(gameId, userId);
  }

  // @Get('/all-developers')
  // getAllDevelopers() {
  //   return this.recordsService.getAllDevelopers();
  // }

  // @Get('/developer/:id')
  // getOneDeveloper() {
  //   return this.recordsService.getOneDeveloper();
  // }

  // @Post()
  // createNewGame(): string {
  //   return this.recordsService.createNewGame();
  // }

  // @Post()
  // createNewDeveloper(): string {
  //   return this.recordsService.createNewDeveloper();
  // }
}
