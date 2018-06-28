class App{
	constructor(){
		this.movieList = []
		const form = document.querySelector('form#movieForm')
		form.addEventListener('submit', (ev) => {
			ev.preventDefault()
			this.updateMovieList(ev)
		})	
	}

	unfavorite(button){
		button.textContent ='♡' 
	}
	
	favorite(button){
        button.textContent = '🖤'
    }

    createFavoriteButton(){
		let i =0;
        const button = document.createElement('button')
        button.classList.add('fav')
        button.textContent ='♡'
        button.addEventListener('click', (ev) => {
            ev.preventDefault()
			if(i%2==0){
  	        	this.favorite(button)
			}
			else{
				this.unfavorite(button)
			}
			i++;
        })
	/*	button.addEventListener('unclick', (ev) => {
			ev.preventDefault()
			this.unfavorite(button)
		})
*/
        return button
    }
	
	remove(ev,movie){
		const item = ev.target.parentElement
		const i = this.movieList.indexOf(movie)
        this.movieList.splice(i,1)
		
		item.parentElement.removeChild(item)
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
		item.appendChild(this.createFavoriteButton())
		list.appendChild(item)
		
		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
