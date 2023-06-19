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
import { UpdateFoodComponent } from './components/update-food/update-food.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardFoodComponent } from './components/pages/dashboard-food/dashboard-food.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"home", component:HomeComponent  },
  
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
 
  { path:'food/:id', component:FoodPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path:'dashboard_food/creatfood',component:CreatfoodComponent},
  { path: 'google', component: GoogleButtonComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'dashboard_food/update-food/:id', component: UpdateFoodComponent },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'recipe/:id', component: ClickedCountryRecipeComponent },
  { path: 'payment', component: PaymentPageComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard_food',component:DashboardFoodComponent},
  { path: 'cart-page', component: CartPageComponent },
  { path: 'foodrecipe/:id', component: FoodrecipeComponent },
  { path: '**', component: NotFoundComponent },

  // { path: 'users', component: ProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
