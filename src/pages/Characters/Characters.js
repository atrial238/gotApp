import React from 'react';

import { TemplatePage } from '../../components';
import GetResource from '../../services/gotService';

const Characters = () => {
	const {getAllCharacters, getCharacter} = new GetResource();

	return <TemplatePage 
				methodSpecificAPI={getCharacter} 
				methodAllItemsAPI={getAllCharacters} 
				partPathForSpecificItem='characters' 
				titleItem='character'
				numberForRundom={100}
				isPaginatorNeeded={true}
			/>
}
export default Characters;

