import React from 'react';
import { Spinner } from '..';
import './RandomItem.css';

const RandomItem = ({specificItem, title}) => {
	
	const titles = (specificItem && Object.keys(specificItem).slice(1, -1)) || []
	
	const listItems = titles.map(el =>
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{el}</span>
			<span>{specificItem[el] || <Spinner/>}</span>
		</li>
	)

	return (
		<div className='random__wrapper'>
		 	<h4><span>Random {title}:</span> <span>{(specificItem && specificItem.name) || <Spinner/>}</span></h4>
			<ul className="list-group list-group-flush">
				{listItems }
			</ul>
		</div>
	)
}

export default RandomItem;
