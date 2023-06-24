import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent {
  name: any;
  country_image: string | undefined;



  constructor(private countryService: CountryService ,private router: Router) {}

  onSubmit() {
    const newCountry = {
      name: this.name,
      country_image: this.country_image
    };

    this.countryService.addCountry(newCountry).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.router.navigateByUrl('/dashboard-country');
  }
}


