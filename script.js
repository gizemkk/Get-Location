"use strict";
/*
  Write an asynchronous function that accepts 1 parameter
    - A city name
​
  this function should use fetch to retrieve the city data from the geocode.xyz API, which uses a URL formatted as follows.
    https://geocode.xyz/seattle?json=1
​
*/
let getBtn = document.querySelector(".btn-primary");
let input = document.getElementById("citySearch");
let coordinates = document.querySelector(".coordinates");
async function getData(city){ 
  const url =`https://geocode.xyz/${city}?json=1`;
  fetch(url)
  .then(res=>res.json())
  .then(res=>renderCity(res));
}
getBtn.onclick=()=>{
  getData(input.value);
}
const renderCity = (res) => {
    // Displays either message depending on results
    if(res.errors){
    coordinates.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {  
      coordinates.innerHTML += `<p>Your longtitude coordinates is: </p><p> ${res.longt} </p>`;
      coordinates.innerHTML += `<p>Your latitude coordinates is: </p><p> ${res.latt} </p>`;
    }
  }
