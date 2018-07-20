const form = document.getElementById('greeting-form')
const greetingElement = document.getElementById('greeting-field')
const nameElement = document.getElementById('name-field')
form.addEventListener('submit',function(event) {
    event.preventDefault()
    console.log(greetingElement.value, nameElement.value )
})