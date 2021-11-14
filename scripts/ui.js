// current nodes taken
const currentIcon = document.querySelector(".current_icon");
const currentTemp = document.querySelector(".current_temp");
const currentDescription = document.querySelector(".current_description");
const currentHumidity = document.querySelector(".current_humidity");
const currentLocation = document.querySelector(".current_location");
const currentTimezone = document.querySelector(".current_timezone");
const currentDate = document.querySelector(".current_date");
const currentUvi = document.querySelector(".current_uvi");
const currentWind = document.querySelector(".current_wind");

const forecastTitle = document.querySelector(".forecast_title");
const forecastMain = document.querySelector(".forecast_main");

// Daily nodes taken
const dailyContainer = document.querySelector(".forecast_daily");
const hourlyContainer = document.querySelector(".forecast_hourly");

// put current data on dom
const currentUi = (dataValues) => {
  let unicode = dataValues.icon;
  currentIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${unicode}@2x.png`
  );
  currentTemp.innerHTML = `${dataValues.temp}&deg;c`;
  currentDescription.textContent = dataValues.description;
  currentHumidity.innerHTML = `<i class="fa fa-tint cicon"></i><br>${dataValues.humidity}%`;
  currentLocation.innerHTML = `${dataValues.location.toUpperCase()}<br><span class="datitle">${
    dataValues.now
  }</span>`;
  currentTimezone.innerHTML = `<div class="fa fa-clock cicon"></div> <br>${dataValues.timezone}`;
  let date = dataValues.now.getDay();
  currentDate.innerHTML = `<i class="fa fa-calendar cicon"></i><br>${weekDay(
    date
  )}`;
  currentUvi.innerHTML = `<i class="fa fa-sun cicon"></i><br>${dataValues.uvi}`;
  currentWind.innerHTML = `<i class="fas fa-wind cicon"></i><br> ${dataValues.wind}`;

  forecastTitle.textContent = "Today";
  forecastMain.textContent = "Week";
};

// set 12hr datetime am/pm format
const doAMPM = (date) => {
  let hours = date.getHours();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let strTime = `${hours} ${ampm}`;
  return strTime;
};

// hourly Data on dom
const hourlyUi = (hourlyValues) => {
  hourlyContainer.innerHTML = "";
  hourlyValues.slice(2,15).forEach((item) => {
    let hourlyWrapper = document.createElement("div");
    hourlyWrapper.classList.add("hourly_items");

    hourlyWrapper.innerHTML = `
        <span class="hourly_counter">${doAMPM(new Date(item.dt * 1000))}</span>
        <img src="https://openweathermap.org/img/wn/${
          item.weather[0].icon
        }@2x.png" class="hourly_icon"></img>
        <span class="hourly_temp">${Math.round(item.temp)}&deg;c</span>
        `;
    hourlyContainer.appendChild(hourlyWrapper);
  });
};

// daily Data on dom
const dailyUi = (dailyValues) => {
  dailyContainer.innerHTML = "";
  dailyValues.slice(1, 8).forEach((item) => {
    let dailyWrapper = document.createElement("div");
    dailyWrapper.classList.add("daily_items");

    dailyWrapper.innerHTML = `
            <span class="daily_counter">${weekDay(
              new Date(item.dt * 1000).getDay()
            )}</span>
            <img src="https://openweathermap.org/img/wn/${
              item.weather[0].icon
            }@2x.png" class="daily_icon"></img>
            <span class="daily_description">${item.weather[0].main}</span>
            <span class="daily_temp">${Math.round(item.temp.day)}&deg;c</span>
         `;
    dailyContainer.appendChild(dailyWrapper);
  });
};



