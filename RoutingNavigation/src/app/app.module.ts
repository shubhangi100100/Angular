import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule}  from '@angular/forms';
import { HerosearchComponent } from './herosearch/herosearch.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    HerosearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
