import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';
import { Assignment6Component } from './components/assignment6/assignment6.component';
import { Assignment7Component } from './components/assignment7/assignment7.component';
import { Assignment8Component } from './components/assignment8/assignment8.component';
import { Assignment9Component } from './components/assignment9/assignment9.component';
import { Assignment10Component } from './components/assignment10/assignment10.component';
import { Assignment11Component } from './components/assignment11/assignment11.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    Assignment5Component,
    Assignment6Component,
    Assignment7Component,
    Assignment8Component,
    Assignment9Component,
    Assignment10Component,
    Assignment11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
