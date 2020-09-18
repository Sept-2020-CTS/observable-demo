import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColdObsComponent } from './cold-obs/cold-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    ColdObsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
