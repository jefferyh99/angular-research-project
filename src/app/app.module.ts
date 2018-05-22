import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// import { MyHeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // 相当于using，还没有声明使用
// import { HeroService } from './hero-module/hero.service'; // 需要注入的服务
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule} from '@angular/common/http'; // httpclient 服务

// 模拟webapi
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// 模拟webapi 数据
import { InMemoryDataService } from './services/in-memory-data.service';
import { delay } from 'rxjs/operators';

import { environment } from 'environments/environment';

// import { HeroSearchComponent } from './hero-search/hero-search.component';
// import { HeroSearchComponent } from './hero-search/hero-search.component';

import { SharedModule } from './shared/shared.module';
import { FormTestComponent} from './component/form-test/form-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HeroModuleModule } from './hero-module/hero-module.module';


@NgModule({
  declarations: [ // 通常是一些新组件的声明,//组件、指令和管道
    AppComponent, // 声明一下这个模版, HeroDetailComponen, HeroDetailComponent内部成员,主要是申明自己写的
    FormTestComponent,
    PageNotFoundComponent,
   // HeroSearchComponent,
   // DashboardComponent,
    MessagesComponent,
   // MyHeroesComponent,
    // HeroDetailComponent,
  ],
  imports: [ // 通常是插入一些全局的可使用的标记方法，如[(ngModel)]
  BrowserModule, //  BrowserModule 以获取浏览器特有的服务,内部Export CommonModule 模块
   FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
   HttpClientModule,
   SharedModule,

   HeroModuleModule, // 子路由，一定要在主路由前面配置
   AppRoutingModule, // AppModule imports AppRoutingModule which exported RouterModule.


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    // 这边的forRoot，相当于即使调用forRoot中的方法，forRoot实现ModuleWithProviders接口，相当于把forRoot里面Provider的service注入进来
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      { dataEncapsulation: false,
        caseSensitiveSearch: true,
        delay: 1000
      }),
  ],
  providers: [
    // HeroService,
    MessageService
  ], // 需要注入使用的服务，如（@Injectable()）
  bootstrap: [AppComponent], // 通常是app启动的根组件
})

export class AppModule {
}

