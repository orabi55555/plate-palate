import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"home", component:HomeComponent  },
  //{ path: 'search/:searchTerm', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path:'food/:id', component:FoodPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'recipes', component: RecipesComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
