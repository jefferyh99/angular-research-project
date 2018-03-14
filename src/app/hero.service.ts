import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './app.component';

import { Observable } from 'rxjs/Observable'; // HttpClient.get() 会返回 Observable,可观察类型，因为是http请求需要异步返回，因此需要回调（Call Back）函数
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }
}

