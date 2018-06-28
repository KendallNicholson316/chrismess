class App{
	constructor(){
		this.list = document.querySelector('#movies')
		this.movieList = []

		
		const form = document.querySelector('form#movieForm')
		form.addEventListener('submit', (ev) => {
			ev.preventDefault()
			this.handleSubmit(ev)
		})	
	}
	
	favorite(movie,button){
		if(!movie.favorite){
			button.textContent = '🖤'
		}
		else{
			button.textContent ='♡'
		}
		movie.favorite = !movie.favorite
    }
	
	createUtilities(movie, item){
		const div = document.createElement('div')
		div.classList.add('utility')

		div.appendChild(this.createRemoveButton(movie, item))		
	
		div.appendChild(this.createFavoriteButton(movie))
		
		return div;
	}
	
    createFavoriteButton(movie){
        const button = document.createElement('button')
        button.classList.add('fav')
        button.textContent ='♡'
        button.addEventListener('click', (_ev) => this.favorite(movie,button))
        return button
    }
	
	remove(movie, item){
		this.list.removeChild(item)
		const i = this.movieList.indexOf(movie)
        this.movieList.splice(i,1)
	}

	createRemoveButton(movie, item){
		const button = document.createElement('button')
        button.classList.add('close')
        button.textContent ='🗑️'
		button.addEventListener('click', () => this.remove(movie,item))
		return button
	}

	createSpan(name, value){
		const span = document.createElement('li')
		span.classList.add(name)
		span.textContent = value
		return span
	}

	createProps(movie, item){
		const div = document.createElement('div')
		div.classList.add('info')

		const keys = Object.keys(movie)

        keys.forEach((keyName) => {
            div.appendChild(this.createSpan(keyName, movie[keyName]))
        })
		
		return div		
	}

	createItem(movie){
		const item = document.createElement('li')
		item.classList.add('movie')
		
		const props = this.createProps(movie, item)
		item.appendChild(props)

		const utilities = this.createUtilities(movie, item)
		item.appendChild(utilities)
		
		return item;
	}

	handleSubmit(ev) {	
		const f = ev.target
		
		const movie = {
			name: f.movieName.value,
			chris: f.chris.value,
			favorite: false,
		}

		this.movieList.push(movie)

		const item = this.createItem(movie)
		this.list.appendChild(item)
		
		f.reset()
		f.movieName.focus()
	}
}

const app = new App()
