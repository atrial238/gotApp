import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router';

import {ErrorMessage, ListTitles, Preloader, RandomItem} from '../../components';

const TemplatePage = ({methodSpecificAPI, methodAllItemsAPI, partPathForSpecificItem, titleItem, numberForRundom}) => {
	const history = useHistory();

	const [items, setItems] = useState([]);
	const [specificItem, setSpecificItem] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isGetAllItemsFailed, setIsGetAllItemsFailed] = useState(false);
	const [isLoadingAllItems, setIsLoadingAllItems] = useState(true);

	const getSpecificItem = () => {
		const getRandomId = () => Math.floor(Math.random() * numberForRundom) + 1;
		setIsError(false);
		setIsLoading(true);
		methodSpecificAPI(getRandomId())
			.then(res => setSpecificItem(res) || setIsLoading(false))
			.catch(() => setIsError(true) || setIsLoading(false));
	};
	
	useEffect(() => {
		setIsGetAllItemsFailed(false);
		setIsLoadingAllItems(true);
		methodAllItemsAPI()
			.then(res => setItems(res) || setIsLoadingAllItems(false))
			.catch(() =>setIsGetAllItemsFailed(true) || setIsLoadingAllItems(false));

		getSpecificItem()
		const idInerval = setInterval(getSpecificItem, 20000);
		return () => clearInterval(idInerval);
	}, [])
	
	const handleClickOnTitle = id => history.push(`/${partPathForSpecificItem}/${id}`);

	return (
		<Row>
			<Col md='6'>
				{isLoadingAllItems
					? <div  className='preloader'><Preloader/></div>
					: isGetAllItemsFailed 
					? <ErrorMessage/>
					: <ListTitles titles={items} handleClickOnTitle={handleClickOnTitle}/>
				}
			</Col>
			<Col md='6'>
				{isLoading 
					? <div className='preloader'><Preloader/></div>
					: isError
					? <ErrorMessage/>
					: <RandomItem title={titleItem} specificItem={specificItem} hanleClickChangeItem={getSpecificItem}/>
				}
			</Col>
		</Row>
	)
}
export default TemplatePage;
