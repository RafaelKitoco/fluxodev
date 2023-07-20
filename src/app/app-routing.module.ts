import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { TermosComponent } from './components/termos/termos.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nav', component:NavbarComponent},
  {path:'form', component:FormComponent},
  {path:'temos e condições', component:TermosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
