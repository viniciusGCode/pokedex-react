import React from 'react';

import "./Navbar.css";

import SearchBar from '../SearchBar/SearchBar';

import pokeAPI from "../../assets/pokeapi.png";

const Navbar = () => {

	return (
		<nav className='navbar'>
			<div className="logo">
				<a href="/">
					<img src={pokeAPI} alt="poke api logo" />
				</a>
			</div>

			<SearchBar/>
		</nav>
	)
}

export default Navbar