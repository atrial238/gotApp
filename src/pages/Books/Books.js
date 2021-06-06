import React from 'react';

import {TemplatePage} from '../../components';
import GetResource from '../../services/gotService';

const Books = () => {

	const {getAllBooks, getBook} = new GetResource();

	return <TemplatePage 
				methodSpecificAPI={getBook}
				methodAllItemsAPI={getAllBooks} 
				partPathForSpecificItem='books' 
				titleItem='book'
				numberForRundom={9}
				isPaginatorNeeded={false}
	 		/>
}
export default Books;
