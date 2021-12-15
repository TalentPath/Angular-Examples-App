import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'binding', component:BindingComponent},
  {path:'forms', component:FormsComponent},
  {path:'parent-child', component:ParentComponent},
  {path:'movie-list', component:MovielistComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
