  
const API_KEY = "638715f644b4d3f5317650e814643a55"

function onGeoOk(position){ // 성공했을 때 함수
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{ // url안에 있는 정보 가져오기 
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}` + "°C";
        city.innerText = "@" + data.name;
    });
}

function onGeoError(){ // 실패했을 때 함수
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition은 성공했을때와 실패했을때 두가지 함수를 넣어줘야 한다