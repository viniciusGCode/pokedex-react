import React from 'react';

import "./Navbar.css";

import pokeAPI from "../../assets/pokeapi.png";

const Navbar = () => {

	return (
		<nav className='navbar'>
			<div className="logo">
				<a href="/">
					<img src={pokeAPI} alt="poke api logo" />
				</a>
			</div>

		</nav>
	)
}

export default Navbar