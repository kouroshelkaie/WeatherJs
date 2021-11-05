const myKey = '6df3ab204590470139a903c1b6bb083d'
const type = "month"


// generate geographic latitude and longitude api
async function getLatLong(input) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`);
    let data = await response.json()
    let lat = data.coord.lat
    let long = data.coord.lon

    getForecast(lat,long)
}

// generate Current/Daily/Hourly forecast data api
async function getForecast(lat,long) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${type}&appid=${myKey}&units=metric`)
    let data = await response.json()

    // generate total data
    console.log(data)

    current(data)
    hourly(data)
    daily(data)
}

// current weather data
const current = (data)=>{
  let currentData = {
    icon : data.current.weather[0].icon,
    location : inputValue.value,
    timezone : data.timezone,
    temp : Math.round(data.current.temp),
    description : data.current.weather[0].description,
    humidity : data.current.humidity,
    now : new Date(data.current.dt * 1000)
  }
  currentUi(currentData)
}

// daily weather data
const daily = (data)=>{
  let dailyData = data.daily
  
  dailyUi(dailyData)
}

// hourly weather data
const hourly = (data)=>{}


// generate number to weekDays
const weekDay = (counterNumber)=>{
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let dayOfWeek = days[counterNumber]
  return dayOfWeek
}

