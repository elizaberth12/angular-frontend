import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ greeting }}</h1>',
  standalone: true
})
export class AppComponent {
  greeting = 'Hello!';
}
