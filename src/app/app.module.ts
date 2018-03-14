import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { MyHeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // 相当于using，还没有声明使用
import { HeroService } from './hero.service'; // 需要注入的服务
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [ // 通常是一些新组件的声明
    AppComponent, // 声明一下这个模版, HeroDetailComponen, HeroDetailComponent内部成员，主要是声明自己写的,
    MessagesComponent,
    MyHeroesComponent,
    HeroDetailComponent
  ],
  imports: [ // 通常是插入一些全局的可使用的标记方法，如[(ngModel)]
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [HeroService], // 需要注入使用的服务，如（@Injectable()）
  bootstrap: [MyHeroesComponent], // 通常是app启动的根组件
})

export class AppModule {
}
