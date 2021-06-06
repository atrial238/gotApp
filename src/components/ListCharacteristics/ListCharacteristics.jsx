import React from 'react';

const ListCharacteristics = ({specificItem}) => {

	const titles = (specificItem && Object.keys(specificItem).slice(1, -1)) || []
	
	const listItems = titles.map((el, index) =>
		<li className="list-group-item d-flex justify-content-between" key={index}>
			<span className="term">{el}</span>
			<span>{specificItem[el]}</span>
		</li>
	)
	
	return <ul className="list-group list-group-flush">{listItems}</ul>
}
export default ListCharacteristics;