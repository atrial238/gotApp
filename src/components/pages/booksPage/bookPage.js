import React from 'react';
import TemplatePage from '../templatePage/templatePage';
import Spinner from '../../spinner/spinner';


const BookDetaillsList = (char) => {
	const {name, numberOfPages, publiser, released } = char;
	const Field = ({field, label}) => {
		return (
			<li className="list-group-item d-flex justify-content-between">
				<span className="term">{label || <Spinner/>}</span>
				<span>{field || <Spinner/>}</span>
			</li>
		)
	}
	return (
		<>
		 	<h4><span>Random book:</span> <span>{name || <Spinner/>}</span></h4>
				<ul className="list-group list-group-flush">
					<Field label={'NumberOfPages'} field={numberOfPages}/>
					<Field label={'Publiser'} field={publiser}/>
					<Field label={'Released'} field={released}/>
				</ul>
		</>
	)
}

const BooksPage = () => <TemplatePage 
									titleButton={'Change book'}
									typeDetailList ={BookDetaillsList} 
									methodForAllItems = {'getAllBooks'}
									methodForItem = {'getBook'}
									randomId = {11}
								/>;
export default BooksPage;
