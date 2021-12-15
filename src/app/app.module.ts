import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MovielistComponent } from './movielist/movielist.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FormsComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    MovielistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
