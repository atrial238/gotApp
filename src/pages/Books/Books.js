import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router';


import TemplatePage from '../TemplatePage/TemplatePage';
import {ListTitles, Preloader, RandomItem, RowBlock, Spinner} from '../../components';
import GetResource from '../../services/gotService';

// const BookDetaillsList = (char) => {
// 	const {name, numberOfPages, publiser, released } = char;
// 	const Field = ({field, label}) => {
// 		return (
// 			<li className="list-group-item d-flex justify-content-between">
// 				<span className="term">{label || <Spinner/>}</span>
// 				<span>{field || <Spinner/>}</span>
// 			</li>
// 		)
// 	}

// 	return (
// 		<>
// 		 	<h4><span>Random book:</span> <span>{name || <Spinner/>}</span></h4>
// 			<ul className="list-group list-group-flush">
// 				<Field label={'NumberOfPages'} field={numberOfPages}/>
// 				<Field label={'Publiser'} field={publiser}/>
// 				<Field label={'Released'} field={released}/>
// 			</ul>
// 		</>
// 	)
// }

const Books = () => {
	const history = useHistory();

	const {getAllBooks, getBook} = new GetResource();

	const [books, setBooks] = useState([]);
	const [specificBook, setSpecificBook] = useState();
	

	const getRandomId = () => Math.floor(Math.random() * 9) + 1;
	const getSpecificBook = () =>	getBook(getRandomId()).then(res => setSpecificBook(res));
	
	useEffect(() => {
		getAllBooks().then(res => setBooks(res));
		getSpecificBook()
		const idInerval = setInterval(getSpecificBook, 10000);
		return () => clearInterval(idInerval);
	}, [])
	
	const handleClickOnTitle = id => history.push(`/books/${id}`);

	return (
		<Row>
			<Col md='6'>
				{(books.length && <ListTitles titles={books} handleClickOnTitle={handleClickOnTitle}/>)
					|| <div  className='preloader'><Preloader/></div>}
			</Col>
			<Col md='6'>
				{(specificBook && <RandomItem title='book' specificItem={specificBook} />) 
					|| <div  className='preloader'><Preloader/></div>}
			</Col>
		</Row>
		// <TemplatePage 
		// 	titleButton={'Change book'}
		// 	typeDetailList ={BookDetaillsList} 
		// 	methodForAllItems = {'getAllBooks'}
		// 	methodForItem = {'getBook'}
		// 	randomId = {11}
		// />
	)
}
export default Books;
