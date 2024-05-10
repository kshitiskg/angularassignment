import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'',
    component:NavbarComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'assignmentOne',
        component:Assignment1Component
      },
      {
        path:'assignmentTwo',
        component:Assignment2Component
      },
      {
        path:'assignmentThree',
        component:Assignment3Component
      },
      {
        path:'assignmentFour',
        component:Assignment4Component
      },
      {
        path:'assignmentFive',
        component:Assignment5Component
      },
      {
        path:'assignmentSix',
        component:Assignment6Component
      },
      {
        path:'assignmentSeven',
        component:Assignment7Component
      },
      {
        path:'assignmentEight',
        component:Assignment8Component
      },
      {
        path:'assignmentNine',
        component:Assignment9Component
      },
      {
        path:'assignmentTen',
        component:Assignment10Component
      },
      {
        path:'assignmentEleven',
        component:Assignment11Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
