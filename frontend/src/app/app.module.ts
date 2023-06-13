import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
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
import { PaypalButtonComponent } from './components/partials/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { FoodrecipeComponent } from './components/pages/foodrecipe/foodrecipe.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateUserProfileComponent
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
    PaypalButtonComponent,
    OrderTrackPageComponent,
    FoodrecipeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
