import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './app.component';

import { Observable } from 'rxjs/Observable'; // HttpClient.get() 会返回 Observable,可观察类型，因为是http请求需要异步返回，因此需要回调（Call Back）函数
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  clickHero(hero: Hero): void {
    this.messageService.add(`HeroService: click hero ${hero.name}`);
  }
}

