import { Component } from '@angular/core';

//Writing an new component
@Component({
  selector: 'app-root', // match HTML tags with components via a selector
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Writing the title
  title = 'angular-first-app';
  description = 'Hello World';
}
