import React from 'react';

import "./Pokemon.css"

import { useState } from 'react';

const Pokemon = (props) => {
	const {pokemon} = props;

	const [filled, setFilled] = useState(false);
	return (
		<div className='poke-card'>
			
				<div className="poke-img">
					<img src={pokemon.sprites.front_default} alt={`${pokemon.name} image`} />
				</div>

				<div className="poke-container">
					<h2>{pokemon.name}</h2>
					<div className="poke-types">
						{
							pokemon.types.map((type, index) => {
								return (
									<div className='type' key={index}>
										<p> {type.type.name} </p>
									</div>
								)
							})
						}
					</div>
				</div>
			
		</div>
	)
}

export default Pokemon