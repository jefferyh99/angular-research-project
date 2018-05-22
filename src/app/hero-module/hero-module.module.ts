import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroModuleRoutingModule } from './hero-module-routing.module';

import { MyHeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HeroComponent} from './hero/hero.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HeroService } from './hero.service'; // 需要注入的服务
import { DashboardComponent} from './dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    HeroModuleRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MyHeroesComponent,
    HeroDetailComponent,
    HeroComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  providers: [
    HeroService // 服务可以在子module配置，这样的话，只会在子module内是一个单例，如果在root配置的话，会在整个app内会是单例
  ]
})
export class HeroModuleModule { }
