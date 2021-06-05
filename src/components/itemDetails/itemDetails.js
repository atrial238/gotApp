import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const ItemDetails = ({getData, itemId, children}) => {
	const [item, updateItem] = useState( {name: <Spinner/>, gender: <Spinner/>, born:  <Spinner/>, died: <Spinner/>, culture:  <Spinner/>});
	const [error, updateError] = useState(false);

	useEffect(() => {
		if(!itemId){
			return;
		}
		
		getData(itemId)
			.then((item) => updateItem(item))
			.catch(() => updateError(error => {
				
				error = true}));
		
	}, [])
	
	const ItemDetails = styled.div`
			background-color: #fff;
			padding: 25px 25px 15px 25px;
			margin-bottom: 40px;
			border-radius: 0.25rem;
			h4{
				margin-bottom: 20px;
				text-align: center;
			}
	`;

	if(error) return <ErrorMessage/>;
	return (
	
		<ItemDetails>
				<h4>{item.name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(children, (child) => {
						
						return React.cloneElement(child, {item})
						})
					}
				</ul>
		</ItemDetails>
	);
    
} 
export default ItemDetails;