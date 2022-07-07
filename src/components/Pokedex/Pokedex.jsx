import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import "./Pokedex.css";
import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons, pokeSearch } from '../../api';
import Pagination from '../Pagination/Pagination';
import SearchBar from "../SearchBar/SearchBar"

const Pokedex = () => {

	const [page, setPage] = useState(0);
	
	const [total, setTotal] = useState(0);

	const [loading, setLoading] = useState(false);
	
	const [pokemons, setPokemons] = useState([]);

	const [notFound, setNotFound] = useState(false);

	const totalPerPage = 21;
	
	const previousClickHandler = () => {
		if(page > 0){
			setPage(page-1);
		}
	}

	const nextClickHandler = () => {
		if(page + 1 !== totalPerPage){
			setPage(page+1);
		}
	}
	const fetchPokemons = async () => {
		try {
			setLoading(true);
			
			const data = await getPokemons(totalPerPage, totalPerPage * page);

			const promises = data.results.map(async (pokemon) => {
				return await getPokemonData(pokemon.url);
			});

			const res = await Promise.all(promises);

			setTotal(Math.ceil(data.count / totalPerPage));

			setPokemons(res);

			setLoading(false);

		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		fetchPokemons();
	}, [page])


	const onSearchHandler = async (pokemon) => {
		if(!pokemon){
			return fetchPokemons();
		}

		setLoading(true);
		setNotFound(false);
		
		const res = await pokeSearch(pokemon);

		if(!res){
			setLoading(false);
			setNotFound(true);
			setPage(0)
			setTotal(1)
		}else{
			setPokemons([res])
			setPage(0)
			setTotal(1)
		}

		setLoading(false);
	}


	return (
		<div className='main-container'>
			<div className="header">
				<h1><span>Poké</span>dex</h1>
				<Pagination 
				page={page+1}
				total={total}
				previousClick={previousClickHandler}
				nextClick={nextClickHandler}
				/>
				<SearchBar
				onSearch={onSearchHandler}
				/>
			</div>
			{
				notFound ? (
					<div className='notFound'>
						<img src="https://http.cat/404.png" alt="nao encontrado" />
					</div>
				) : (
				<div className='pokedex-container'>
					{
						loading ? 
						<div> Carregando... </div>
						: (
							<div className='pokedex-grid'>
								{
									pokemons.length > 0 && pokemons.map((pokemon, index) => {
										return (
											<Pokemon pokemon={pokemon} key={index}/>
										)
									})
								}
							</div>
						) 
					}
				</div>
				)
			}
		</div>
	)
}

export default Pokedex;