const form = document.querySelector('form#movieForm')

function createItem(f){
	const movieName = f.movieName.value
    const chris = f.chris.value
	     
    const movieNameSpan = document.createElement('span')
	movieNameSpan.classList.add('name')
    movieNameSpan.textContent = movieName
     
    const chrisSpan = document.createElement('span')
	chrisSpan.classList.add('chris')
    chrisSpan.textContent = ' - ' +  chris
 
    const item = document.createElement('li')
    item.appendChild(movieNameSpan)
    item.appendChild(chrisSpan)

	return item;
}

const updateMovieList = function(ev) {
	ev.preventDefault()
	const f = ev.target

	const list = document.querySelector('#movies')
	list.appendChild(createItem(f))

	f.reset()
	f.movieName.focus()
}

form.addEventListener('submit', updateMovieList)
