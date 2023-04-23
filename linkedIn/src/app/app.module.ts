import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkedInPageModule } from './linkedIn/linked-in-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinkedInPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
