const form = document.querySelector("#form");
const inputValue = document.querySelector(".input_value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputData = e.target.elements.cityInput.value;

  form.style.marginTop = 0

  setTimeout(()=>{getLatLong(inputData)},500)
});

// i commented this section,Because of the boycott of Google APIs in iran
// we can't access geolocation from the chrome browser
// so you should type your own place :)

// window.addEventListener("load", () => {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     let la = pos.coords.latitude;
//     let lon = pos.coords.longitude;
//     getForecast(la, lon);
//   });
// });


