import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { AddsComponent } from './adds/adds.component';
import { HomeComponent } from './home/home.component';
import { LinkedInRoutingModule } from './linked-in-routing.module';
import { PersonalInfoComponent } from './contact/personal-info/personal-info.component';
import { CreateComponent } from './news/create/create.component';


@NgModule({
  declarations: [
    ContactComponent,
    NewsComponent,
    AddsComponent,
    HomeComponent,
    PersonalInfoComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    LinkedInRoutingModule,
  ]
})
export class LinkedInPageModule { }
