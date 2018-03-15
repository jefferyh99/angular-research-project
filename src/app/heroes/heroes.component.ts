// import { HEROES } from '../mock-heroes';
import { Hero } from '../app.component';

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })

export class MyHeroesComponent implements OnInit {
    constructor(private heroService: HeroService) { } // 注入时，用的是Private，这样Html就拿不到该对象

    heroes: Hero[];
    selectedHero: Hero;

    ngOnInit(): void {
      this.getHeros();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.clickHero(hero);
      }
    // getHeros(): void {
    //   this.heroes = this.heroService.getHeros();
    // } //同步方法（服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面才能如此使用）

    getHeros(): void {
      this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
    } // 异步方法

    clickHero(hero: Hero): void {
      this.heroService.clickHero(hero);
    }
}


