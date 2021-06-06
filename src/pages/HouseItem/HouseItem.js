import React from 'react';

import GetResource from '../../services/gotService';
import {SpecificItem} from '../../components';

const HouseItem = () => {

	const {getHouse} = new GetResource();

	return <SpecificItem methodAPI={getHouse}/>

}
export default HouseItem;
