import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
   { path: 'heroes', component: MyHeroesComponent },
   { path: 'detail/:id', component: HeroDetailComponent }, // （:）表示 :id 是一个占位符，它表示某个特定英雄的 id
   { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroModuleRoutingModule { }
