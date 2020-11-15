import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountriesReport } from 'src/app/model/CountriesReport';
import { DisplayCountriesService } from 'src/app/service/displaycountries.service';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  currencies: any[];

  countriesReport: CountriesReport;

  constructor(private service: DisplayCountriesService, private dialogRef: MatDialogRef<CountryDetailComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.alpha2Code = data.alpha2Code;
  }

  ngOnInit(): void {
    this.service.countriesReport().subscribe(result => {

      this.countriesReport = result.find(a => a.alpha2Code == this.alpha2Code);
      this.name = this.countriesReport.name;
      this.alpha3Code = this.countriesReport.alpha3Code;
      this.capital = this.countriesReport.capital;
      this.region = this.countriesReport.region;
      this.subregion = this.countriesReport.subregion;
      this.population = this.countriesReport.population;
      this.demonym = this.countriesReport.demonym;
      this.area = this.countriesReport.area;
      this.gini = this.countriesReport.gini;
      this.timezones = this.countriesReport.timezones;
      this.currencies = this.countriesReport.currencies;
    });
  }

  close() {
    this.dialogRef.close();
  }

}
