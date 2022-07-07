import React from 'react';

import {FaSearch} from "react-icons/fa";

import { useState } from 'react';

import { pokeSearch } from '../../api';

import "./SearchBar.css";

const SearchBar = () => {
	
	const [pokemon, setPokemon] = useState("");
	
	const [search, setSearch ] = useState("");

	const onSearchHandler = async (pokemon) => {
		if(!pokemon) return

		const res = await pokeSearch(pokemon);

		setPokemon(res);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!search) return

		onSearchHandler(search);

	}
	return (
		<div className='search'>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Pesquise o pokemon' onChange={(e) => setSearch(e.target.value)} value={search}/>
				<button type='submit'>
					<FaSearch/>
				</button>

				<div>
					{
						pokemon ? (
							<div>
								<p>{pokemon.name}</p>
							</div>
						)
						: null
					}
				</div>
			</form>
		</div>
	)
}

export default SearchBar