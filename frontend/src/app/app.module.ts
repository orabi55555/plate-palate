import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './components/partials/title/title.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HorizontalScrollComponent } from './components/recipes/horizontal-scroll/horizontal-scroll.component';
import { CountriesRecipesComponent } from './components/recipes/countries-recipes/countries-recipes.component';
//import { NgxStarRatingModule } from 'ngx-star-rating';
//import { RatingModule } from 'ngx-bootstrap/rating';
// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { RatingModule } from 'ngx-bootstrap/rating';
// import { TagsComponent } from './components/partials/tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,

    TitleComponent,
    FoodPageComponent,
    NotFoundComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    RecipesComponent,
    HorizontalScrollComponent,
    CountriesRecipesComponent,
    // TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
    ])

   // NgbRatingModule,
   // NgbRatingModule,
   // NgxStarRatingModule,
   // RatingModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
