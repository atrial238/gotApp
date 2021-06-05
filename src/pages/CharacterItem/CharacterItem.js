import React, {Component} from 'react';

import GetResource from '../../services/gotService';
import {Field, ItemDetails} from '../../components'

export default class CharacterItem extends Component {

	getService = new GetResource();
	render(){
		return (
			<ItemDetails
				itemId = {this.props.characterId}
				getData = {this.getService.getCharacter}
			 >
				<Field field='gender' label='Gender' />
				<Field field='born' label='Born' />
				<Field field='died' label='Died' />
				<Field field='culture' label='Culture' />
			</ItemDetails>
		)
	}
}