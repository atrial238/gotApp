import React from 'react';
import { Paginator } from '..';
import './ListTitles.css';

const ListTitles = ({titles, handleClickOnTitle, isPaginatorNeeded, handlePagination}) => {

	const titlesElem = titles.map(el => 
		<li 
			key={el.id}
			className="list-group-item" 
			onClick={() => handleClickOnTitle(el.id)}
		>
			<span className='title_for_titleList'>{el.name}</span>
		</li>
	)

	return (
		<div className='wrapper_list_items'>
			{isPaginatorNeeded && <Paginator handlePagination={handlePagination}/>}
			<ul>{titlesElem}</ul>
		</div>
		
	)
}
export default ListTitles;

