import { Component, OnInit } from '@angular/core';
//a-component to create files component

@Component({
  selector: 'selector-name',
  templateUrl: 'name.component.html',
})
export class NameComponent implements OnInit {
  constructor() {}
  brand: string = 'Chervolet'; //string type
  obj = {
    a: 3,
  };

  ngOnInit() {}
}
