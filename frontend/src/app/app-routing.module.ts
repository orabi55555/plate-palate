import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/pages/auth/signup-page/signup-page.component';
import { LoginPageComponent } from './components/pages/auth/login-page/login-page.component';
import { GoogleButtonComponent } from './components/pages/auth/thirdPartyLoginButtons/google-button/google-button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ClickedCountryRecipeComponent } from './components/pages/clicked-country-recipe/clicked-country-recipe.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
// import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { FoodrecipeComponent } from './components/pages/foodrecipe/foodrecipe.component';
import { CreatfoodComponent } from './components/creatfood/creatfood.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"home", component:HomeComponent  },
  { path:'food/:id', component:FoodPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  {path:'creatfood',component:CreatfoodComponent},
  { path: 'google', component: GoogleButtonComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'recipe/:id', component: ClickedCountryRecipeComponent },
  { path: 'payment', component: PaymentPageComponent },
  // { path: 'track', component: OrderTrackPageComponent },
  { path: 'foodrecipe/:id', component: FoodrecipeComponent },
  { path: '**', component: NotFoundComponent },

  // { path: 'users', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
