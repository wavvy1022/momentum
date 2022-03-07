const API_KEY = "09d0ca65dd549ad225b6c3c6179abe40"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url).then(response => response.JSON);
    // console.log(url)
}

function onGeoError(){
    alert("Can't find you. no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);