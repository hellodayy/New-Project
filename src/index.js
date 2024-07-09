function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  //  let cityElement = document.querySelector("#current-city");
  //cityElement.innerHTML = searchInputElement.value;
  defineApi();
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function defineApi() {
  let apiKey = "fdb1b4026fa299784f6o27t429cd3399";
  let city = document.querySelector("#search-input").value;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}

function showTemperature(response) {
  let cityData = response.data.city;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = cityData;
  let temperature = Math.round(response.data.temperature.current);
  let tempElemt = document.querySelector("span.current-temperature-value");
  tempElemt.innerHTML = temperature;
}
