import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesReport } from 'src/app/model/CountriesReport';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'

})
export class DisplayCountriesService {

    constructor(private http: HttpClient) { }

    public countriesReport(): Observable<CountriesReport[]> {
        return this.http.get<CountriesReport[]>("http://localhost:4000/api/v1/all");
    }
}