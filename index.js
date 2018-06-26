const form = document.querySelector('form#movieForm')

const updateMovieList = function(ev) {
	ev.preventDefault()
	const f = ev.target

	const movieName = f.movieName.value
	const chris = f.chris.value

	const itemMovieName = document.createElement('li')
	itemMovieName.textContent = movieName

	const itemChris = document.createElement('li')
	itemChris.textContent = chris

	const list = document.querySelector('#movies')
	list.appendChild(itemMovieName)
	list.appendChild(itemChris)

	f.reset()
}

form.addEventListener('submit', updateMovieList)
