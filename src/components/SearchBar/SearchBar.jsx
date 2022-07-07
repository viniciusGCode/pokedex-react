import React from 'react';

import {FaSearch} from "react-icons/fa";

import { useState } from 'react';

import { pokeSearch } from '../../api';

import "./SearchBar.css";

const SearchBar = (props) => {

	const {onSearch} = props;
	
	const [search, setSearch ] = useState("");

	const onChangeHandler = (e) => {
		setSearch(e.target.value);

		if (e.target.value == 0) {
			onSearch(undefined);
		}
	}

	const onClickHandler = () => {
		onSearch(search);
	}
	return (
		<div className='search'>
				<input type="text" placeholder='Pesquise o pokemon' onChange={onChangeHandler}/>
				<button onClick={onClickHandler}>
					<FaSearch/>
				</button>

				<div>
				</div>
		</div>
	)
}

export default SearchBar