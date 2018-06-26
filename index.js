const form = document.querySelector('form#movieForm')

const updateMovieList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const movieName = f.movieName.value
  const item = document.createElement('li')
  item.textContent = movieName

  const list = document.querySelector('#movies')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', updateMovieList)
