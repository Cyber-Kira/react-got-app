export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    async getAllCharacters() {
        const characters = await this.getResourse(`/characters?page=5&pageSize=10`);
        return characters.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses() {
        return this.getResourse(`/houses/`);
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}`);
    }

    getAllBooks() {
        return this.getResourse(`/books`);
    }

    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: char.name || 'No data',
            gender: char.gender || 'No data',
            born: char.born || 'No data',
            died: char.died || 'No data',
            culture: char.culture || 'No data'
        }
    }
    
    _transformHouses = (house) => {
        return {
            id: this._extractId(house),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
};