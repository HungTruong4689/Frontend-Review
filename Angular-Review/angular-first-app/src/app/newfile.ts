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

//Custom types
type Animal = 'Cheetah' | 'Lion';

const animal: Animal = 'Cheetah';

//enum
enum BrandsReduced {
  Tesla = 1,
  GMC,
  Jeep,
}

const myTruck: BrandsReduced = BrandsReduced.GMC; // yields 2
