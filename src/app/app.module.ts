import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { InputComponent } from './input/input.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import {AlertsService} from './alert-service/alerts.service';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module'

//Defining routes
const routes:Routes=[
  {path:"goals",component:GoalComponent},
  {path:"about",component:AboutComponent},
  // {path:"",redirectTo:"/goals",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    InputComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    
    NgProgressModule,//normal progress bar
    NgProgressHttpModule //progress bar to load http requestes
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
