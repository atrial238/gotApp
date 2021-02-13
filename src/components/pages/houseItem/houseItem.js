import React, {Component} from 'react';
import  ItemDetails, {Field} from '../../itemDetails/itemDetails';
import GetResource from '../../../services/gotService';

export default class HouseItem extends Component {

	getService = new GetResource();
	render(){
		return (
			<ItemDetails
				itemId = {this.props.houseId}
				getData = {this.getService.getHouse}
			 >
				<Field field='region' label='Region' />
				<Field field='words' label='Words' />
				<Field field='ancestralWeapons' label='AncestralWeapons' />
			</ItemDetails>
		)
	}
}
