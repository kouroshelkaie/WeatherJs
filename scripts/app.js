const form = document.querySelector('#form')
const inputValue = document.querySelector('.input_value')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let inputData = e.target.elements.cityInput.value
    getLatLong(inputData)
})