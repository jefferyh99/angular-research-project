import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'AppComponent';
}

export class Hero {
  id: number;
  name: string;
}

