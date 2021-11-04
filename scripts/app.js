const form = document.querySelector('#form')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let inputData = e.target.elements.cityInput.value
    console.log(inputData)
})