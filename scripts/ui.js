const currentIcon = document.querySelector('.current_icon')
const currentTemp = document.querySelector('.current_temp')
const currentDescription = document.querySelector('.current_description')
const currentHumidity = document.querySelector('.current_humidity')
const currentLocation = document.querySelector('.current_location')
const currentTimezone = document.querySelector('.current_timezone')
const currentDate = document.querySelector('.current_date')








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