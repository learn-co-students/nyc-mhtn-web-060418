const element = document.getElementById('listen-for-event')
console.log(element)
element.addEventListener('click', function (event) { console.log(event,this)})