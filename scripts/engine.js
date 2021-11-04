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

const current = (data)=>{
  let location = inputValue.value
  let timezone = data.timezone
  let temp = Math.round(data.current.temp)
  let description = data.current.weather[0].description
  let humidity = data.current.humidity
  let now = new Date(data.current.dt * 1000)
  
  currentUi(location,timezone,temp,description,humidity,now)
}
const hourly = (data)=>{}
const daily = (data)=>{}