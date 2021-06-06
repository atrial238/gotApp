import React from 'react';

import GetResource from '../../services/gotService';
import { SpecificItem} from '../../components'

const CharacterItem = () => {
	const {getCharacter} = new GetResource();

	return <SpecificItem methodAPI={getCharacter}/>
}
export default CharacterItem;


