const form = document.querySelector('form#movieForm')

const updateMovieList = function(ev) {
	ev.preventDefault()
	const f = ev.target

	const movieName = f.movieName.value
	const chris = f.chris.value

	const movieNameSpan = document.createElement('span1')
	movieNameSpan.textContent = movieName

	const chrisSpan = document.createElement('span2')
	chrisSpan.textContent = ' - ' +  chris

	const item = document.createElement('li')
	item.appendChild(movieNameSpan)
	item.appendChild(chrisSpan)

	const list = document.querySelector('#movies')
	list.appendChild(item)

	f.reset()
}

form.addEventListener('submit', updateMovieList)
