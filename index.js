console.log('It works!')
const button = document.querySelector('button')

const updateText = function(){
	const header2 = document.querySelector('h2.header')
	header2.textContent = 'still is'
}

button.addEventListener('click',updateText)
