//Print the country which uses US Dollars as currency
var request = new XMLHttpRequest()
request.open('Get','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
 console.log(countrydata);
    var countryname = countrydata.filter(item =>  item.currencies[0].name == ('United State Dollar')  || item.currencies[0].name == 'United States dollar' ).map(item => item.name);
    console.log(countryname);
}