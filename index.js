class App{
	constructor(){
		this.movieList = []
		const form = document.querySelector('form#movieForm')
		form.addEventListener('submit', (ev) => {
			ev.preventDefault()
			this.updateMovieList(ev)
		})	
	}
	
	remove(ev){
		const item = ev.target.parentElement
	//	const item = document.querySelector(movie)
		item.parentElement.removeChild(item)
	}

	createRemoveButton(){
		const button = document.createElement('button')
        button.classList.add('close')
        button.textContent ='🗑️'
		button.addEventListener('click', (ev) => {
            ev.preventDefault()
            this.remove(ev)
        })
		return button
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
			item.appendChild(this.createSpan(keyName, movie[keyName]))
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
		const item = this.createItem(movie)
		item.appendChild(this.createRemoveButton())
		list.appendChild(item)
		
		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
