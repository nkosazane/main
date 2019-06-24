import {FormsModule} from '@angular/forms'
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ManuComponent } from './manu/manu.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:"",component:ManuComponent,children:[{path:"about",component:AboutComponent},
  
  { path:"",component:HomeComponent},
  { path:"contact",component:ContactComponent},
  { path:"feedback",component:FeedbackComponent}

]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
