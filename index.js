console.log('It works!')
const form = document.getElementById('form1')
const button = document.querySelector('button')

const updateChris = function(event){
	event.preventDefault()
	const header1 = document.querySelector('h1.header')
	header1.textContent = document.getElementById('form1').elements['favChris'].value
	form.reset()	
}

const updateHeader = function(){
	const header2 = document.querySelector('h2.header')
	header2.textContent = 'still is'
}

button.addEventListener('click',updateHeader)
form.addEventListener('submit',updateChris)
