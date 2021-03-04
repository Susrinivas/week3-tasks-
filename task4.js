var request = new XMLHttpRequest();
request.open('Get','https://restcountries.eu/rest/v2/all');
request.send();
request.onload = function(){
    var countrydata = JSON.parse(this.response);
    
    let result = countrydata.reduce((result,item) => result+item.population, 0);
    console.log(result.toLocaleString());
}