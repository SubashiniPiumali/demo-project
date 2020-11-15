export interface CountriesReport{

name :string;
alpha2Code:string;
alpha3Code:string;
capital:string;
region:string;
subregion:string;
population:number;
demonym:string;
area:number;
gini:number;
timezones:string[];
currencies:[
    code:string,
    name:string,
    symbol:string 
];

}