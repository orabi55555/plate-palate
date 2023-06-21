import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Country } from '../shared/models/Country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'http://localhost:7000/api/Country'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getCountryWithRecipes(countryId: string): Observable<any> {
    const url = `${this.baseUrl}/${countryId}/getallrecipes`;
    return this.http.get<any>(url);
  }

  getAllCountries(): Observable<any> {
    const url = `${this.baseUrl}/countries/getall`;
    return this.http.get<any>(url);
  }


  //get by id for dashboard
  getCountryById(id: string): Observable<any> {
    console.log(`getCountryById(${id})`);
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  //get all countries for Dashboard
  getCountries(){
    // console.log(`getCountry(${countryId})`);
    return this.http.get<any[]>(`${this.baseUrl}/countries/getall`);
  }

  //delete
  deleteCountry(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }


  //create
  addCountry(country: any) {
    return this.http.post<any>(`${this.baseUrl}/create`, country);
  }

  //search
  searchCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/country/name/${name}`);
  }

  //update
  updateCountryById(id: string, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.baseUrl}/update/${id}`, country);
  }

}


