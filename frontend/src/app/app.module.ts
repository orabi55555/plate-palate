import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { HorizontalScrollComponent } from './components/pages/recipes/horizontal-scroll/horizontal-scroll.component';
import { CountriesRecipesComponent } from './components/pages/recipes/countries-recipes/countries-recipes.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent,
    NotFoundComponent,
    LoginPageComponent,
    HeaderComponent,
    HomeComponent,
    RecipesComponent,
    HorizontalScrollComponent,
    CountriesRecipesComponent,
    FooterComponent,
    ProfileComponent,
    AboutUsComponent,
    ContactUsComponent,
    PaymentPageComponent,
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
