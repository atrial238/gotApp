import React from 'react';

const Field = ({item, field, label}) => {
	console.log(item)
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	)
}
export default Field;