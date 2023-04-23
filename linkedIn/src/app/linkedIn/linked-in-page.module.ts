import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { AddsComponent } from './adds/adds.component';
import { HomeComponent } from './home/home.component';
import { LinkedInRoutingModule } from './linked-in-routing.module';



@NgModule({
  declarations: [
    ContactComponent,
    NewsComponent,
    AddsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LinkedInRoutingModule,
  ]
})
export class LinkedInPageModule { }
