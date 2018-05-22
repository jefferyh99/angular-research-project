import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from 'typings/Heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})

export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>; // heroes$ 声明为一个 Observable

// Subject 既是可观察对象的数据源，本身也是 Observable。
// 你可以像订阅任何 Observable 一样订阅 Subject。
// 订阅后，可以处理数据源
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    // 你还可以通过调用它的 next(value) 方法往 Observable 中推送一些值
    this.searchTerms.next(term);
    console.log(this.searchTerms);

    // 获取里面的数据源
    this.searchTerms.forEach(value => console.log(value));

    // 获取订阅了searchTerms的观察者
    this.searchTerms.observers.forEach(value => console.log(value));

    // 发布者=被观察者（发布消息的人）（Subject）
    // 订阅者=观察者（接收消息的人）（Observer）
    // 可观察的 = 可订阅的
  }

  ngOnInit(): void {

    // 通过这些，能大大减少http的调用请求
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    ); // 这里没有订阅，是因为在html中，通过<li *ngFor="let hero of heroes$ | async" >已经订阅了，同样的效果
  }
}
