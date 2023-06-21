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
import { CreatfoodComponent } from './components/pages/creatfood/creatfood.component';
import { UpdateFoodComponent } from './components/pages/update-food/update-food.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashboardFoodComponent } from './components/pages/dashboard-food/dashboard-food.component';
import{UserAuthGuard,AdminAuthGuard} from './services/authguard.service';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"home", component:HomeComponent },
  { path: 'contact-us', component: ContactUsComponent,canActivate: [UserAuthGuard] },
  { path: 'about-us', component: AboutUsComponent,canActivate: [UserAuthGuard] },
  { path:'food/:id', component:FoodPageComponent ,canActivate: [UserAuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [UserAuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path:'dashboard_food/creatfood',component:CreatfoodComponent, canActivate: [AdminAuthGuard] },
  { path: 'google', component: GoogleButtonComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'dashboard_food/update-food/:id', component: UpdateFoodComponent, canActivate: [AdminAuthGuard] },
  { path: 'payment-page', component: PaymentPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'country/:countryId', component: ClickedCountryRecipeComponent },
  { path: 'payment', component: PaymentPageComponent },
  // { path: 'users', component: ProfileComponent },
  {path:'dashboard',component:DashboardComponent, canActivate: [AdminAuthGuard]},
  {path:'dashboard_food',component:DashboardFoodComponent, canActivate: [AdminAuthGuard]},
  // { path: 'track', component: OrderTrackPageComponent },
  { path: 'foodrecipe/:id', component: FoodrecipeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
