import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import {
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './components/pages/auth/signup-page/signup-page.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginPageComponent } from './components/pages/auth/login-page/login-page.component';
import { GoogleButtonComponent } from './components/pages/auth/thirdPartyLoginButtons/google-button/google-button.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { HorizontalScrollComponent } from './components/pages/recipes/horizontal-scroll/horizontal-scroll.component';
import { CountriesRecipesComponent } from './components/pages/recipes/countries-recipes/countries-recipes.component';
import { ClickedCountryRecipeComponent } from './components/pages/clicked-country-recipe/clicked-country-recipe.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
// import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodrecipeComponent } from './components/pages/foodrecipe/foodrecipe.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatfoodComponent } from './components/pages/creatfood/creatfood.component';
import { UpdateFoodComponent } from './components/pages/update-food/update-food.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { DashboardFoodComponent } from './components/pages/dashboard-food/dashboard-food.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
// import { StripeModule } from 'stripe-angular';
import { environment } from '../environments/environment';
import { CountryService } from './services/country.service';
import { UpdateUserProfileComponent } from './components/pages/update-user-profile/update-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateUserProfileComponent,
    ContactUsComponent,
    FoodPageComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    LoginPageComponent,
    SignupPageComponent,
    GoogleButtonComponent,
    RecipesComponent,
    HorizontalScrollComponent,
    CountriesRecipesComponent,
    FooterComponent,
    ProfileComponent,
    AboutUsComponent,
    ContactUsComponent,
    ClickedCountryRecipeComponent,
    PaymentPageComponent,
    // CheckoutComponent,
    OrdersComponent,
    // OrderTrackPageComponent,
    FoodrecipeComponent,
    CreatfoodComponent,
    UpdateFoodComponent,
    DashboardComponent,
    SidebarComponent,
    DashboardFoodComponent,
    NavbarComponent,
    CartPageComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //  StripeModule.forRoot(environment.stripePublishableKey)

  ],
 // =providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
