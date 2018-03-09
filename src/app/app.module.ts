import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component'; // 相当于using，还没有声明使用
import { MyHeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent, // 声明一下这个模块内部成员，主要是声明自己写的
    MyHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [MyHeroesComponent], // 通常是app启动的根组件
})

export class AppModule {
}
