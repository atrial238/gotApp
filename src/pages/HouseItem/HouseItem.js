import React, {Component} from 'react';

import GetResource from '../../services/gotService';
import {Field, ItemDetails} from '../../components'

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
