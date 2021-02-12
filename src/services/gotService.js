export default class GetResource {
	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	fetchResource = async(url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if(!res.ok){
			throw new Error(`coudn't fetch ${this._apiBase} status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCharacters = async () => {
		const res =  await  this.fetchResource('/characters?page=5&pageSize=10');
		return res.map(this._transformCharacter)
	}

	getCharacter = async (id) => {
		const res = await this.fetchResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}
	getAllBooks = async () => {
		const res = await this.fetchResource('/books');
		return res.map(this._transformBook);
	}
	getBook = async (id) => {
		const res = await this.fetchResource(`/books/${id}`);
		return this._transformBook(res);
	}
	getAllHouses = async () => {
		const res = await this.fetchResource('/houses/');
		return res.map(this._transformHouse);
	}
	getHouse =  async(id) => {
	
		const res = await this.fetchResource(`/houses/${id}`);
		
		return this._transformHouse(res);
	}
	_transformCharacter(char){
		
		return {
			name: char.name || 'unknown',
			gender: char.gender || 'unknown',
			born: char.born || 'unknown',
			died: char.died || 'unknown',
			culture: char.culture || 'unknown',
			id: +char.url.match(/\d/g).join('')
		}
	}
	_transformHouse(house){
		return {
			name: house.name || 'unknown',
			region: house.region || 'unknown',
			words:house.words || 'unknown',
			titles: house.titles || 'unknown',
			overlord: house.overlord || 'unknown',
			ancestralWeapons: house.ancestralWeapons,
			id: +house.url.match(/\d/g).join('')
		}
	}

	_transformBook(book){
		return {
			name: book.name || 'unknown',
			numberOfPages: book.numberOfPages || 'unknown',
			publiser: book.publiser || 'unknown',
			released: book.released || 'unknown',
			id: book.url.match(/\d/g).join('')
		}
	}

}
