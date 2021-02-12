import React, {Component} from 'react';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import GetResource from '../../../services/gotService';

export default class BooksItem extends Component {
	gotService = new GetResource;
	
	render(){
		return (
			<ItemDetails 
				itemId ={this.props.bookId}
				getData = {this.gotService.getBook}
				pleaseSelectItem = {'Please select book'}
			>
		 		<Field field='numberOfPages' label='NumberOfPages' />
				<Field field='publiser' label='Publiser' />
				<Field field='released' label='Released' />
			</ItemDetails>
			)
	}
}
