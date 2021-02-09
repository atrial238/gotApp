export default class GetResource {
	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	async fetchResource(url){
		const res = await fetch(`${this._apiBase}${url}`);

		if(!res.ok){
			throw new Error(`coudn't fetch ${this._apiBase} status: ${res.status}`);
		}

		return await res.json();
	}

	async getAllCharacters(){
		const res =  await this.fetchResource('/characters?page=5&pageSize=10');
		return res.map(this._transformCharacter)
	}

	async getCharacter(id){
		const res = await this.fetchResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}
	async getAllBooks(){
		const res = await this.fetchResource('/books');
		return res.map(this._transformBook);
	}
	async getBook(id){
		const res = await this.fetchResource(`/books/${id}`);
		return this._transformBook(res);
	}
	async getAllHouses(){
		const res = await this.fetchResource('/houses/');
		return res.map(this._transformHouse);
	}
	async getHouse(id){
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
		}
	}
	_transformHouse(house){
		return {
			name: house.name,
			region: house.region,
			words:house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons
		}
	}

	_transformBook(book){
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released
		}
	}

}



