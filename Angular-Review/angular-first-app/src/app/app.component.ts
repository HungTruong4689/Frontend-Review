import { Component } from '@angular/core';

//Writing an new component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Writing the title
  title = 'angular-first-app';
}
