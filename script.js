//initial conditions
let wethrcontainer= document.querySelector(".wethr-container");
let wethrcard = document.querySelector(".wethr-card");
let left = document.querySelector(".left");
let weather = document.querySelector(".wethr");
let temprature = document.querySelector(".temp");
let cityName = document.querySelector(".cityname");
let humidity = document.querySelector(".rp");
let windperc = document.querySelector(".wp");
let visi = document.querySelector(".uvp");

//weather icons for every weather
let wethrobj ={
    Rain : `  <i class="fa-solid fa-cloud-showers-heavy"></i>`,
    Clouds : `  <i class="fa-solid fa-cloud"></i>`,
    Snow : ` <i class="fa-solid fa-snowflake"></i>`,
    Haze:   ` <i class="fa-solid fa-smog"></i>`,
    Mist:   ` <i class="fa-solid fa-cloud-meatball"></i>`,
    Clear: ` <i class="fa-solid fa-sun"></i>`
}

//calling the loadWeather method()
loadWeather();

//method to fetch the weather details
async function loadWeather(){
    let city=document.getElementById('city').value
    let details;
    fetchdata(city)
    async function fetchdata(){
        //current data
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ec8027f9afa11371eb8cb23292005ff`)
        .then(async (jsondata) => {
            details=await jsondata.json();

            //appending to the HTML
            weather.innerHTML=details.weather[0].main+wethrobj[details.weather[0].main];
            temprature.innerText = `${(details.main.temp-273.15).toFixed(1)}°C`;
            cityName.innerHTML=`<i class="fa fa-thin fa-location-dot"></i>${details.name}`;
            humidity.innerText=details.main.humidity+" %";
            windperc.innerText=details.wind.speed+" Km/h";
            visi.innerText=details.visibility/1000+" Km";

        }).catch((err) => {
            console.log(err)
        });

    }
}
