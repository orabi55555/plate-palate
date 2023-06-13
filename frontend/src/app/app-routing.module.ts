import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { GoogleButtonComponent } from './components/pages/login-page/thirdPartyLoginButtons/google-button/google-button.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

import { HomeComponent } from './components/pages/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path:'food/:id', component:FoodPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'google', component: GoogleButtonComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
