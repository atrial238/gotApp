import React from 'react';
import { ListCharacteristics } from '..';
import './RandomItem.css';

const RandomItem = ({specificItem, title, hanleClickChangeItem}) => {
	
	return(
		<div className='random__wrapper'>
		 	<h4><span>Random {title}:</span> <span>{specificItem.name}</span></h4>
			<ListCharacteristics specificItem={specificItem}/>
			<div className='random_button'>
				<button onClick={hanleClickChangeItem}>{`Chenge ${title}`}</button>
			</div>
		</div>
	)
	
}

export default RandomItem;
