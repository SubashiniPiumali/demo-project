
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountriesReport } from 'src/app/model/CountriesReport';
import { DisplayCountriesService } from 'src/app/service/displaycountries.service';
import { CountryDetailComponent } from '../country-detail/country-detail.component';


@Component({
  selector: 'app-displaycountries',
  templateUrl: './displaycountries.component.html',
  styleUrls: ['./displaycountries.component.css']
})


export class DisplaycountriesComponent implements OnInit {

 public datasource: MatTableDataSource<CountriesReport>;

  displayedColumns: string[] = ['name', 'alpha2Code', 'alpha3Code', 'capital','region','subregion','population','demonym','area','gini','timezones','currencies','actions'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: DisplayCountriesService,public dialog:MatDialog) {
   this.datasource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getAllCountries();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  public getAllCountries = () => {
    this.service.countriesReport()
    .subscribe(res => {
      this.datasource.data = res as CountriesReport[];
    });
  }

  public doFilter = (value: string) => {
    this.datasource.filter = value.trim().toLocaleLowerCase();
  }


  openDialog(data) {  
    
    const dialogConfig = new MatDialogConfig();  
    dialogConfig.disableClose = true;  
    dialogConfig.autoFocus = true;  
    dialogConfig.position = {  
        'top': '100px',  
        'left': '500px'  
    };  
    dialogConfig.width = '500px';  
    dialogConfig.height = '600px';  
    dialogConfig.data = {  
        alpha2Code: data.alpha2Code 
    };  
    this.dialog.open(CountryDetailComponent, dialogConfig);  
} 


}
