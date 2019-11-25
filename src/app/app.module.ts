import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, MyNewDirectiveDirective, ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
