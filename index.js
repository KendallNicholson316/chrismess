class App{
	constructor(){
		this.movieList = []
		const form = document.querySelector('form#movieForm')
		form.addEventListener('submit', (ev) => {
			ev.preventDefault()
			this.updateMovieList(ev)
		})	
	}
	
	remove(ev,movie){
		const item = ev.target.parentElement
		debugger
		const i = this.movieList.indexOf(movie)
        this.movieList.splice(i,1)
		
//		const item = ev.target.parentElement
		item.parentElement.removeChild(item)
		debugger
//		const i = this.movieList.indexOf(item)
//		this.movieList.splice(i,1)
//		debugger
	}

	createRemoveButton(movie){
		const button = document.createElement('button')
        button.classList.add('close')
        button.textContent ='🗑️'
		button.addEventListener('click', (ev) => {
            ev.preventDefault()
            this.remove(ev,movie)
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
		item.appendChild(this.createRemoveButton(movie))
		list.appendChild(item)
		
		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
