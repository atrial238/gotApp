import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router';

import {ErrorMessage, ListTitles, Preloader, RandomItem} from '../../components';
import GetResource from '../../services/gotService';


const Books = () => {
	const history = useHistory();

	const {getAllBooks, getBook} = new GetResource();

	const [books, setBooks] = useState([]);
	const [specificBook, setSpecificBook] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isGetAllBooksFailed, setIsGetAllBooksFailed] = useState(false);
	const [isLoadingAllBooks, setIsLoadingAllBooks] = useState(true);

	const getSpecificBook = () => {
		const getRandomId = () => Math.floor(Math.random() * 9) + 1;
		setIsError(false);
		setIsLoading(true);
		getBook(getRandomId())
			.then(res => setSpecificBook(res) || setIsLoading(false))
			.catch(() => setIsError(true) || setIsLoading(false));
	};
	
	useEffect(() => {
		setIsGetAllBooksFailed(false);
		setIsLoadingAllBooks(true);
		getAllBooks()
			.then(res => setBooks(res) || setIsLoadingAllBooks(false))
			.catch(() =>setIsGetAllBooksFailed(true) || setIsLoadingAllBooks(false));

		getSpecificBook()
		const idInerval = setInterval(getSpecificBook, 20000);
		return () => clearInterval(idInerval);
	}, [])
	
	const handleClickOnTitle = id => history.push(`/books/${id}`);

	return (
		<Row>
			<Col md='6'>
				{isLoadingAllBooks
					? <div  className='preloader'><Preloader/></div>
					: isGetAllBooksFailed 
					? <ErrorMessage/>
					: <ListTitles titles={books} handleClickOnTitle={handleClickOnTitle}/>
				}
			</Col>
			<Col md='6'>
				{isLoading 
					? <div className='preloader'><Preloader/></div>
					: isError
					? <ErrorMessage/>
					: <RandomItem title='book' specificItem={specificBook} hanleClickChangeItem={getSpecificBook}/>
				}
			</Col>
		</Row>
	)
}
export default Books;
