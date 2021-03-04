//Get all the countries with population of less than 2 lacs using Filter method 
var request = new XMLHttpRequest();

request.open('Get','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var countrydata = JSON.parse(this.response);
    var countriesWithPopulationLessThantwoLakhs =   countrydata.filter(item => item.population < 200000).map(item => item.name);
    console.log(countriesWithPopulationLessThantwoLakhs);
}