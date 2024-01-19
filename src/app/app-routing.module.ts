import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {AppComponent} from "./app.component";
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path :"kk",
    component : AppComponent
  },

  {
    path :"kkkk/:id",
    component : AppComponent
  },

  {path : 'login', component : LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path :"**" , component : NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
