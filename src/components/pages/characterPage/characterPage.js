import React, {Component} from 'react';
import  {Field} from '../../itemDetails/itemDetails';
import TemplatePage from '../templatePage/templatePage';

export default class CharacterPage extends Component {
	render(){
		return (
			<TemplatePage
				methodForOneItem = {'getCharacter'}
				methodForAllItems = {'getAllCharacters'}
				pleaseSelectItem ={'Please select characters'}
			 >
				<Field field='gender' label='Gender' />
				<Field field='born' label='Born' />
				<Field field='died' label='Died' />
				<Field field='culture' label='Culture' />
				
			</TemplatePage>
		)
		
	}
}
