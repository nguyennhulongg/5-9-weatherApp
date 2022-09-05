const content = document.querySelector('.content');
const searchBox = document.querySelector('.search-box');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const tempValue = document.querySelector('.temp-value');
const shortDes = document.querySelector('.short-desc h3');
const informations = document.querySelector('.informations');
const vision = document.querySelector('.vision span');
const wind = document.querySelector('.wind span');
const sun = document.querySelector('.sun span');
const time = document.querySelector('.time span');
const notFound = document.querySelector('.err') 

async function changeWeather() {
    const citySearch = searchBox.value.trim();
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=364613a525c0322a99664f4f7cf8cbad`;
    let data = await fetch(endpoint).then(blob => blob.json());
    if (data.cod == 200) {
        notFound.style.display = 'none'
        content.style.display = "flex";
        city.innerHTML= data.name + ",";
        tempValue.innerHTML = Math.floor(data.main.temp - 273.15) + `<sup>o</sup>C`;
        country.innerHTML = data.sys.country;
        vision.innerHTML = data.visibility + "m";
        wind.innerHTML = data.wind.speed + '(m/s)';
        sun.innerHTML = data.main.humidity + '(%)';
        shortDes.innerHTML = data.weather[0].main;
        time.innerHTML = new Date().toLocaleString(`${data.sys.country}`);
    } else {
        notFound.style.display = 'block';
        content.style.display = "none";
    }
}

searchBox.addEventListener('keypress', e => {
    if (e.code === 'Enter') {
        changeWeather();
    }
})



