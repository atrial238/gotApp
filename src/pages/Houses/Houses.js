import React from 'react';


import {TemplatePage} from '../../components'
import GetResource from '../../services/gotService';



const Houses = () => {
	const {getAllHouses, getHouse} = new GetResource();

	return <TemplatePage 
				methodSpecificAPI={getHouse}
				methodAllItemsAPI={getAllHouses} 
				partPathForSpecificItem='houses' 
				titleItem='house'
				numberForRundom={9}
	 		/>
}
export default Houses;

