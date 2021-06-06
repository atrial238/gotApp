import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router';

import GetResource from '../../services/gotService';
import {ErrorMessage, ListCharacteristics, Preloader} from '../../components'
import './booksItem.css';
import backButton from '../../assets/img/backButton.svg';

const BooksItem = () => {

	const {id} = useParams();
	const history = useHistory();

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
					<div className='title_wrapper'>
						<div className='backbutton' onClick={() => history.goBack()}><img src={backButton} alt='backbutton'/></div>
						<h4>{specificBook.name}</h4>
					</div>
					<ListCharacteristics specificItem={specificBook}/>
					</div>
}
export default BooksItem;
