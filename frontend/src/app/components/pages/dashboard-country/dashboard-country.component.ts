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
   deleteCountry(id: string): void {
    console.log(id);
    this.countryService.deleteCountry(id).subscribe(() => {
        if (this.countries) {
          this.countries = this.countries.filter(country => country._id !== id);
        }
        this.router.navigateByUrl('/dashboard-country');
      });
  }

}



