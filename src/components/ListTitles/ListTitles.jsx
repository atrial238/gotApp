import React from 'react';

const ListTitles = ({titles, handleClickOnTitle}) => {

	const titlesElem = titles.map(el => 
		<li 
			key={el.id}
			className="list-group-item" 
			onClick={() => handleClickOnTitle(el.id)}
		>
			{el.name}
		</li>
	)

	return (
		<ul>{titlesElem}</ul>
	)
}
export default ListTitles;

