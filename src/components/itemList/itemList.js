import React, {useState, useEffect} from 'react';
import './itemList.css';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ItemList = ({getData, onItemSelected}) => {
	
	const [itemList, updateList] = useState([]);
	const [error, updateError] = useState(false);
	
	useEffect(() => {
		getData()
			.then((itemList) => {
				updateList(itemList);
			})
			.catch(() => {
				updateError(error =>  error = true);
			})
	}, [])
	
	
	const renderItems = (arr) => {
		return arr.map((item)=> {
			const {id} = item,
					lable = item.name;
			return (
				<li 
					key={id}
					className="list-group-item"
					onClick={() => onItemSelected(id)}
				>
					{lable}
				</li>
			)
		})
	}
	
	const	 List = styled.ul`
		.list-group-item{
			cursor: pointer;
		}
	`
	if(error) return <ErrorMessage/>
	
	try{
		if(!itemList.length) return <Spinner/>;
		const items = renderItems(itemList);
	
		return <List>{items}</List>;
	}catch(e){
		updateError(error => error = true);
	}
	
	
}
export default ItemList;
