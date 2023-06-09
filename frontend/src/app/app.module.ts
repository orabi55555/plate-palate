import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { RatingModule } from 'ngx-bootstrap/rating';

import { TagsComponent } from './components/partials/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent,
    SigninComponent,
    HeaderComponent,
    // HomeComponent,
    // TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbRatingModule,
    // NgxStarRatingModule,
    // RatingModule.forRoot(),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
