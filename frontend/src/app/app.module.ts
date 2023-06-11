import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
//import { NgxStarRatingModule } from 'ngx-star-rating';
//import { RatingModule } from 'ngx-bootstrap/rating';
// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { RatingModule } from 'ngx-bootstrap/rating';
// import { TagsComponent } from './components/partials/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
    CartPageComponent,
    TitleComponent
    FoodPageComponent,
    NotFoundComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    // TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbRatingModule,
   // NgbRatingModule,
   // NgxStarRatingModule,
   // RatingModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
