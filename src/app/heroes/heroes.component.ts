import { HEROES } from '../mock-heroes';
import { Hero } from '../app.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })

export class MyHeroesComponent {
    heroes: Hero[] = HEROES;
    selectedHero: Hero = this.heroes[0];
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
      }
}

