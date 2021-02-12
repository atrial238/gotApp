import React, {Component} from 'react';

import ItemDetails, {Field} from '../../itemDetails/itemDetails';

import Templatepage from '../templatePage/templatePage';



export default class HousesPage extends Component {


	render(){
		return (
			<Templatepage
				methodForOneItem = {'getHouse'}
				methodForAllItems = {'getAllHouses'}
				pleaseSelectItem ={'Please select house'}
			 >
				 
				<Field field='region' label='Region' />
				<Field field='words' label='Words' />
				<Field field='titles' label='Titles' />
				<Field field='overlord' label='Overlord' />
				<Field field='ancestralWeapons' label='AncestralWeapons' />
				
			</Templatepage>
		)
		
	}
}
