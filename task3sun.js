var request = new XMLHttpRequest()

request.open('Get','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var countrydata = JSON.parse(this.response);
    countrydata.forEach((item) => {
        console.log(item.name);
        console.log(item.capital);
        console.log(item.flag);
    })
    //console.log(countrydata);
}