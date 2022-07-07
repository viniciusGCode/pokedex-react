import React from 'react';

import "./Pagination.css"

import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";

const Pagination = (props) => {
	const {page, total, previousClick, nextClick} = props;
	return (
		<div className='pagination'>
			<button onClick={previousClick}>
				<AiOutlineArrowLeft/>
			</button>
			<div>{page} de {total}</div>
			<button onClick={nextClick}>
				<AiOutlineArrowRight/>
			</button>
		</div>
	)
}

export default Pagination