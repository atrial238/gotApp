import React, {useEffect, useState} from 'react';

import GetResource from '../../services/gotService';
import {ErrorMessage, ListCharacteristics, Preloader} from '../../components'
import { useParams } from 'react-router';
import './booksItem.css';

const BooksItem = () => {

	const {id} = useParams();

	const {getBook} = new GetResource();
	const [specificBook, setSpecificBook] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false)
		getBook(id)
			.then(res => setSpecificBook(res) || setIsLoading(false))
			.catch(() => setIsError(true) || setIsLoading(false));
	}, []);

	return isLoading 
				? <div className='preloader'><Preloader/></div>
				: isError
				? <ErrorMessage/>
				: <div className='wrapper_specific_item'>
					<h4>{specificBook.name}</h4>
					<ListCharacteristics specificItem={specificBook}/>
				</div>
}
export default BooksItem;
