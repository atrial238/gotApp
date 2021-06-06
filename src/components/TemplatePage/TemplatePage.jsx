import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router';

import {ErrorMessage, ListTitles, Preloader, RandomItem} from '../../components';

const TemplatePage = ({methodSpecificAPI, methodAllItemsAPI, partPathForSpecificItem, 
	titleItem, numberForRundom, isPaginatorNeeded}) => {
	const history = useHistory();

	const [items, setItems] = useState([]);
	const [specificItem, setSpecificItem] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [isGetAllItemsFailed, setIsGetAllItemsFailed] = useState(false);
	const [isLoadingAllItems, setIsLoadingAllItems] = useState(true);
	const [page, setPage] = useState(4);

	//get the specific items from server
	const getSpecificItem = () => {
		const getRandomId = () => Math.floor(Math.random() * numberForRundom) + 1;
		setIsError(false);
		setIsLoading(true);
		methodSpecificAPI(getRandomId())
			.then(res => setSpecificItem(res) || setIsLoading(false))
			.catch(() => setIsError(true) || setIsLoading(false));
	};
	
	//get all itmes and the specific intems from the server.
	useEffect(() => {
		setIsGetAllItemsFailed(false);
		setIsLoadingAllItems(true);
		methodAllItemsAPI()
			.then(res => setItems(res) || setIsLoadingAllItems(false))
			.catch(() =>setIsGetAllItemsFailed(true) || setIsLoadingAllItems(false));

		getSpecificItem(page)
		const idInerval = setInterval(getSpecificItem, 20000);
		return () => clearInterval(idInerval);
	}, []);
	
	//handle paginatioin when page change
	useEffect(() => {
		setIsGetAllItemsFailed(false);
		setIsLoadingAllItems(true);
		methodAllItemsAPI(page)
			.then(res => setItems(res) || setIsLoadingAllItems(false))
			.catch(() =>setIsGetAllItemsFailed(true) || setIsLoadingAllItems(false));
	},[page]);

	const handlePagination = (number) => setPage(page + number);

	const handleClickOnTitle = id => history.push(`/${partPathForSpecificItem}/${id}`);

	return (
		<Row>
			<Col md='6'>
				{isLoadingAllItems
					? <div  className='preloader'><Preloader/></div>
					: isGetAllItemsFailed 
					? <ErrorMessage/>
					: <ListTitles 
							titles={items} 
							handleClickOnTitle={handleClickOnTitle} 
							isPaginatorNeeded={isPaginatorNeeded}
							handlePagination={handlePagination}
						/>
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
