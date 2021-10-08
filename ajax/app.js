const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log(this.responseText);
    const data = JSON.parse(this,responseText);
    for(let planet of data.result){
        console.log(planet.name)
    }
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!!!!!');

});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send()

console.log("sending request .....")