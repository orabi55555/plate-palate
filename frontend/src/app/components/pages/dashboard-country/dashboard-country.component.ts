import { Component,OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-country',
  templateUrl: './dashboard-country.component.html',
  styleUrls: ['./dashboard-country.component.css']
})
export class DashboardCountryComponent {
  countries: any[] | undefined;

  constructor(private countryService: CountryService,private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      console.log(this.countries);
    });


  }

  // searchByCategory() {
  //   this.foodService.searchFoodsByCategory(this.category)
  //     .subscribe(foods => {
  //       this.foods = foods;
  //       console.log(foods)
  //     });
  // }
  //  deleteFood(id: string): void {
  //   console.log(id);
  //   this.foodService.deleteFoodById(id).subscribe(() => {
  //       if (this.foods) {
  //         this.foods = this.foods.filter(food => food._id !== id);
  //       }
  //       this.router.navigateByUrl('/dashboard_food');
  //     });
  // }

}



