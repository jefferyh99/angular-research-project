import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../app.component';

// 导航路由
import { ActivatedRoute } from '@angular/router';

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
    private location: Location
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
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

