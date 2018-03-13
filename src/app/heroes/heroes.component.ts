import { HEROES } from '../mock-heroes';
import { Hero } from '../app.component';
import { Component } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
@Component({
    selector: 'app-my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })

export class MyHeroesComponent {
    heroes: Hero[] = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
      }
}

const a = HEROES;
//console.log(a);

