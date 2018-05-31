import { Component, OnInit, Input } from '@angular/core';

import { Hero } from 'app/hero';

// 导航路由
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// 处理可观察对象
import { switchMap } from 'rxjs/operators';

// angular 与浏览器打交道
import { Location } from '@angular/common';

// 获取英雄数据
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {

  // 所有需要使用到的服务，都需要通过构造函数注入进来
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  // @Input() hero: Hero;

  hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
   //  route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // const id = + this.route.snapshot.paramMap.get('id');


    this.heroService.getHero(id)
      .subscribe(hero => {
          this.hero = hero;
          console.log(hero);
        });

        const hero$ = this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            this.heroService.getHero(Number(params.get('id'))))
        );
        hero$.subscribe(hero => {
          console.log(hero);
        });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

