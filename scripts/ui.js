// current nodes taken
const currentIcon = document.querySelector('.current_icon')
const currentTemp = document.querySelector('.current_temp')
const currentDescription = document.querySelector('.current_description')
const currentHumidity = document.querySelector('.current_humidity')
const currentLocation = document.querySelector('.current_location')
const currentTimezone = document.querySelector('.current_timezone')
const currentDate = document.querySelector('.current_date')

// Daily nodes taken
const dailyContainer = document.querySelector('.forecast_daily')
const hourlyContainer = document.querySelector('.forecast_hourly')


// put current data on dom
const currentUi = (dataValues)=>{
    let unicode = dataValues.icon
    currentIcon.setAttribute("src",`http://openweathermap.org/img/wn/${unicode}@2x.png`)
    currentTemp.textContent = dataValues.temp;
    currentDescription.textContent = dataValues.description;
    currentHumidity.textContent = dataValues.humidity;
    currentLocation.textContent = dataValues.location;
    currentTimezone.textContent = dataValues.timezone;
    let date = dataValues.now.getDay()
    currentDate.textContent = weekDay(date)
}

// daily Data on dom
const dailyUi = (dailyValues)=>{
    dailyContainer.innerHTML = ""
    dailyValues.slice(1,8).forEach((item)=>{
        let dailyWrapper = document.createElement('div')
        dailyWrapper.classList.add('daily_items')

        dailyWrapper.innerHTML = `
            <span class="daily_counter">${weekDay(new Date(item.dt * 1000).getDay())}</span>
            <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" class="daily_icon"></img>
            <span class="daily_description">${item.weather[0].main}</span>
            <span class="daily_temp">${Math.round(item.temp.day)}&deg;</span>
         `
         dailyContainer.appendChild(dailyWrapper)
    })
}

// hourly Data on dom
const hourlyUi = (hourlyValues)=>{
    hourlyContainer.innerHTML = ""
    console.log(hourlyValues)
    hourlyValues.slice(1,15).forEach((item)=>{
        let hourlyWrapper = document.createElement('div')
        hourlyWrapper.classList.add('hourly_items')

        hourlyWrapper.innerHTML = `
        <span class="hourly_counter">${new Date(item.dt * 1000).getHours()}</span>
        <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" class="hourly_icon"></img>
        <span class="hourly_temp">${Math.round(item.temp)}&deg;</span>
        `
        hourlyContainer.appendChild(hourlyWrapper)
    })
}