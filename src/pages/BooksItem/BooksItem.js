import React from 'react';

import GetResource from '../../services/gotService';
import {SpecificItem} from '../../components'

const BooksItem = () => {

	const {getBook} = new GetResource();

	return <SpecificItem methodAPI={getBook}/>
}
export default BooksItem;
