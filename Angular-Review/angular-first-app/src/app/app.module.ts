import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Angular organizes components into self-containered blcoked of functionality called modules.
//An Angular application has at least one main module called AppModule, as a convention
@NgModule({
  declarations: [AppComponent], //define all components that exist inside the module
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
