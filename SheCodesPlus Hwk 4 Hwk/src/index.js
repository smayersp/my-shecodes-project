function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let now = new Date();
let dateTime = document.querySelector(".date-time");
dateTime.innerHTML = formatDate(now);

function cityName() {
  event.preventDefault();
  let currentCity = document.querySelector(".current-city");
  let city = document.querySelector(".search-input");
  currentCity.innerHTML = `${city.value}`;
}

let cityForm = document.querySelector("#enter-city");
cityForm.addEventListener("submit", cityName);
