class App{
	constructor(){
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
/*		const movieName = f.movieName.value
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
*/
		
		return item;
	}

	updateMovieList(ev) {
		const f = ev.target
		
		const movie = {
			name: f.movieName.value,
			chris: f.chris.value,
		}
		
//		const item = this.createItem(movie)

		const list = document.querySelector('#movies')
		list.appendChild(this.createItem(movie))

		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
