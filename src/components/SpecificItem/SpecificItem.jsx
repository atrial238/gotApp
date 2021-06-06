
import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router';

import {ErrorMessage, ListCharacteristics, Preloader} from '../../components'
import backButton from '../../assets/img/backButton.svg';
import './SpecificItem.css';
const SpecificItem = ({methodAPI}) => {

	const {id} = useParams();
	const history = useHistory();


	const [specificBook, setSpecificItem] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false)
		methodAPI(id)
			.then(res => setSpecificItem(res) || setIsLoading(false))
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
export default SpecificItem;
