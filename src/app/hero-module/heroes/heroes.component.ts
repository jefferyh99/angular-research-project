// import { HEROES } from '../mock-heroes';
import { Hero } from 'app/hero';

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
      this.getHeroes();
    }

    // Remove dead code
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.clickHero(hero);
      }
    // getHeros(): void {
    //   this.heroes = this.heroService.getHeros();
    // } //同步方法（服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面才能如此使用）

    getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    } // 异步方法

    clickHero(hero: Hero): void {
      this.heroService.clickHero(hero);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void {
      // 删除heroes的绑定
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
      // 重要：如果你忘了调用 subscribe()，本服务将不会把这个删除请求发送给服务器。 作为一条通用的规则，Observable 在有人订阅之前什么都不会做。
    }
}


