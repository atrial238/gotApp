import React from 'react';
import './Paginator.css';

const Paginator = ({handlePagination}) => {

	return (
		<div className='wraper_paginator'>
			<button onClick={() => handlePagination(-1)}>Previous</button>
			<button onClick={() => handlePagination(1)}>Next</button>
		</div>
	)
}
export default Paginator;