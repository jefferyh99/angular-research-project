import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from 'typings/Heroes/hero';

import { Observable } from 'rxjs/Observable'; // HttpClient.get() 会返回 Observable,可观察类型，因为是http请求需要异步返回，因此需要回调（Call Back）函数
import { of } from 'rxjs/observable/of';

import { MessageService } from 'app/messages/message.service';


import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // http服务
import { catchError, map, tap } from 'rxjs/operators'; // 异常处理

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {


  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl = 'api/heroes3';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // 本地数据模拟http请求，返回Observable对象
  // getHeroes(): Observable<Hero[]> {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {

    // pipe 一定要连在一起写
    const result = this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(heroes => this.log('Pipe Tap fetched heroes')),
      catchError(this.handleError('getHeroes', [])));
    return result;
  }


  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   const obj = HEROES.find((hero, index, heroS) => hero.id === id);
  //   // const obj = HEROES.find((hero, index) => hero.id === id);
  //   // const obj = HEROES.find((hero) => hero.id === id);
  //   return of(obj);
  // }

/** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`; // 服务器能自己适应,http://npm.taobao.org/package/angular-in-memory-web-api

  // 坑爹啊
  // const url = 'api/heroes1/?id=14'; // 这个返回的是 Hero[]
  // const url = 'api/heroes1/?name=Narco';//这个返回的是 Hero[]
  // const url = 'api/heroes1/14';//这个返回的是 Hero

    const abc =  this.http.get<Hero>(url);
    console.log(abc);

    return this.http.get<Hero>(url).pipe(
      tap(_ => {
        this.log(`Pipe Tap fetched hero id=${_.id} name=${_.name}`); // (异步加载有回调,无论多久都会回调）
        console.log('tap:' + _.id ); // (异步加载有回调）
        console.log(_); // (异步加载有回调）
    }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


/** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {

    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((currentHero: Hero) => this.log(`added hero w/ id=${currentHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
deleteHero (hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}


  clickHero(hero: Hero): void {
    this.messageService.add(`HeroService: click hero ${hero.name}`);
  }


  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }











   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

// 没有写返回值，且不是void的，是类型推断得出的返回值
private handleError<T> (operation = 'operation', result?: T): (error: any) => Observable<T> {

  const value = (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.body.error}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };

  return value;
}
}

// 我的笔记
// 类的定义
declare class BCD {
  something<T>(url: string, options?: {
    params?: {
      [param: string]: string | string[]; // params是一个对象，对象里面的是任意属性，赋值时可以{param2:'param2'}，当dictionary用
    };
  }): Observable<T>;
}

class ABC {
  name: string;
  [param: number]: string; // 定义为数组
  [param2: string]: string; // 定义为任意属性
}

const a = new ABC();
a.name = '1';
a[0] = '1';
a.param2 = '1';
a.param3 = '2';






