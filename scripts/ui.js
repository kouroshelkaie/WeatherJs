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
    dailyValues.forEach((item)=>{
        let dailyWrapper = document.createElement('div')
        dailyWrapper.classList.add('daily_items')
        dailyWrapper.innerHTML = `
            <span class="daily_counter">${item.dt}</span>
            <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" class="daily_icon"></img>
            <span class ="daily_temp">${Math.round(item.temp.day)}&deg;</span>
         `
         dailyContainer.appendChild(dailyWrapper)
    })
}