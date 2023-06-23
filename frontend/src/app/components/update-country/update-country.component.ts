import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent {

  country: any;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.countryService.getCountryById(id!)
      .subscribe(country => this.country = country);
  }

  onSubmit() {
    this.countryService.updateCountryById(this.country._id, this.country)
      .subscribe(updatedCountry => this.country = updatedCountry);
      this.router.navigateByUrl('/dashboard-country');
  }

 }


