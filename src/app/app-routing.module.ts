import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyHeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: MyHeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, // （:）表示 :id 是一个占位符，它表示某个特定英雄的 id
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // 默认路由
];

@NgModule({
  // 这里导出的作用
  // 能在 AppComponent 中使用 RouterOutlet，是因为 AppModule 导入了 AppRoutingModule，
  // 而 AppRoutingModule 中导出了 RouterModule,需要手动导出，才能在html中用到这个RouterModule
  // 中的 RouterOutlet 指令
  exports: [
    // 如果在这边exports出来，当html需要用到RouterModul中的router-outlet属性时，就不需要手动重新编写代码加载。
    // 如果重新写代码需要重新写以下代码，对调用者不友好。
    // 这样写就能只需要导入本module，即AppRoutingModule，即可。
    // import { RouterModule} from '@angular/router';
    // @NgModule({
    // imports: [
    //  RouterModule
    // ],
    RouterModule

  ],
  // RouterModule.forRoot(routes)
  // Create a module with all the router providers and directives
  imports: [ RouterModule.forRoot(routes) ],

})

export class AppRoutingModule { }


