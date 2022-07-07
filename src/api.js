//função para pesquisar pokemons

export const pokeSearch = async (pokemon) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

		const res = await fetch(url);

		const data = await res.json();

		return data;
		
	} catch (err) {
		console.error(err)
	}
} 

//função para consultar os pokemons na api

export const getPokemons = async (limit = 50, offset = 0) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

		const res = await fetch(url);

		const data = await res.json();

		return data;
		
	} catch (err) {
		console.error(err)
	}
} 

//função para retornar o pokemon consultado


export const getPokemonData = async (url) => {
	try {
		const res = await fetch(url);

		const data = await res.json();

		return data;
		
	} catch (err) {
		console.error(err)
	}
} 