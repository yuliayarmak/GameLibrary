import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    getHello(): string;
    login(): string;
    register(body: any): string;
}
