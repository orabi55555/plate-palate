import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    ContactUsComponent,
    FoodPageComponent,
    NotFoundComponent,
    HeaderComponent,
    LoginPageComponent,
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
