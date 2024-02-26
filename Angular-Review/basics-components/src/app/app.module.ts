import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasicHighlightDirectiveDirective } from './directive/basic-highlight/basic-highlight-directive.directive';
import { BetterHighlightDirectiveDirective } from './directive/better-highlight-directive/better-highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighlightDirectiveDirective,
    BetterHighlightDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule, //FormsModule to import ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
