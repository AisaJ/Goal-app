import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { GoalComponent } from '../goal/goal.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { GoalDetailsComponent} from '../goal-details/goal-details.component'

//Defining routes
const routes:Routes=[
  {path:"goals",component:GoalComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/goals",pathMatch:"full"},
  {path:'goals/:id',component:GoalDetailsComponent},
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  exports:[RouterModule],

  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
})
export class RoutingModule { }
