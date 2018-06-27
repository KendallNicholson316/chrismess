class App{
	constructor(){
		this.movieList = []
		const form = document.querySelector('form#movieForm')
		form.addEventListener('submit', (ev) => {
			ev.preventDefault()
			this.updateMovieList(ev)
		})	
	}

	createSpan(name, value){
		const span = document.createElement('span')
		span.classList.add(name)
		span.textContent = value
		return span
	}
	createItem(movie){
		const item = document.createElement('li')
		item.classList.add('movie')

		const keys = Object.keys(movie)
		
		keys.forEach((keyName) => {
			const span = this.createSpan(keyName, movie[keyName])
			item.appendChild(span)
		})
		
		return item;
	}

	updateMovieList(ev) {	
		const f = ev.target
		
		const movie = {
			name: f.movieName.value,
			chris: f.chris.value,
		}

		this.movieList.push(movie)

		const list = document.querySelector('#movies')
		list.appendChild(this.createItem(movie))
		

		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
