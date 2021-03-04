//Get all the countries from Asia continent / “region” using Filter method
var request = new XMLHttpRequest();

request.open('Get','https://restcountries.eu/rest/v2/all', true);

request.send();

request.onload = function(){
    var countrydata = JSON.parse(this.response);

    var asiaCountries = countrydata.filter(item => (item.region == "Asia")).map(item => item.name);

    console.log(asiaCountries);
}