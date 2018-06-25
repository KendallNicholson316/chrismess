console.log('It works!')
const button = document.querySelector('button')

const updateText = function(){
	const header = document.querySelector('h1')
	header.textContent = 'Chris Pratt is number 1 <3'
}

button.addEventListener('click',updateText)
