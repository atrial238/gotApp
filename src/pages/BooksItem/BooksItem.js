import React, {Component} from 'react';

import GetResource from '../../services/gotService';
import {Field, ItemDetails} from '../../components'

export default class BooksItem extends Component {
	gotService = new GetResource();
	
	render(){
		return (
			<ItemDetails 
				itemId ={this.props.bookId}
				getData = {this.gotService.getBook}
			>
		 		<Field field='numberOfPages' label='NumberOfPages' />
				<Field field='publiser' label='Publiser' />
				<Field field='released' label='Released' />
			</ItemDetails>
			)
	}
}
