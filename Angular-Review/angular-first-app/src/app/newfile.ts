import { Component, OnInit } from '@angular/core';
//a-component to create files component

// @Component({
//   selector: 'selector-name',
//   templateUrl: 'name.component.html',
// })
// export class NameComponent implements OnInit {
//   constructor() {}
//   brand: string = 'Chervolet'; //string type
//   obj = {
//     a: 3,
//   };

//   ngOnInit() {}
// }

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

//void
function test(): void {
  const a = 0;
}

//Annotating types in our functions
function sayHello(name: string): string {
  return 'Hello, ' + name;
}
//
const sayHello2: (name: string) => string = function (name: string): string {
  return 'Hello, ' + name;
};

//Optional parameters
// ? symbol as a postfix to the parameter name we want to make optional
function greetMe(name: string, greeting?: string): string {
  if (!greeting) {
    greeting = 'Hello';
  }

  return greeting + ', ' + name;
}
