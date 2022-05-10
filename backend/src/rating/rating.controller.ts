import { Controller, Get, Post, Body } from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  getHello(): string {
    return this.ratingService.getHello();
  }

  @Post()
  login(): string {
    return this.ratingService.getHello();
  }

  @Post()
  register(@Body() body): string {
    return this.ratingService.createNewUser(body);
  }
}
