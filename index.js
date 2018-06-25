console.log('It works!')
const form = document.getElementById('form1')

const updateText = function(event){
	event.preventDefault()
	const header1 = document.querySelector('h1.header')
	header1.textContent = document.getElementById('form1').elements['favChris'].value
	form.reset()	
}

form.addEventListener('submit',updateText)
