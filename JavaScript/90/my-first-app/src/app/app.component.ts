import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  person = { firstName: 'Bob', lastName: 'Bobison', address: {address:'420 bobsstreet', city: 'Bobsburg', zip: '808'}}
}
