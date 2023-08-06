const key = "0510a4a42dbee2eb8b9212bc3754ce3e";

function searchCity() {
  const city = document.querySelector(".search-Input").value;
  postCity(city);
}

async function postCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  ).then((response) => response.json());

  showData(data);
}

function showData(data) {
  document.querySelector(".city").innerHTML = "Weather in " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC";
  console.log(data);
  document.querySelector(".condition").innerHTML = data.weather[0].description;
  document.querySelector(
    ".weather-img"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

// function ftoc(temp) {
//   return ((temp / 100 - 32) * 5) / 9;
// }
