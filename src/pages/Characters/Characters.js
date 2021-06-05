import React from 'react';
import Templatepage from '../TemplatePage/TemplatePage';
import {Spinner} from '../../components';

const CharacterDetaillsList = (char) => {
	const {name, gender, born, died, culture } = char;

	const Field = ({field, label}) => {
		return (
			<li className="list-group-item d-flex justify-content-between">
				<span className="term">{label || <Spinner/>}</span>
				<span>{field || <Spinner/>}</span>
			</li>
		)
	}
	return (
		<>
		 	<h4><span>Random Character:</span> <span>{name || <Spinner/>}</span></h4>
				<ul className="list-group list-group-flush">
					<Field label={'Gender'} field={gender}/>
					<Field label={'Born'} field={born}/>
					<Field label={'Died'} field={died}/>
					<Field label={'Culture'} field={culture}/>
					
				</ul>
		</>
	)
}
const  Characters = () =>  <Templatepage 
											titleButton={'Change character'}
											typeDetailList ={CharacterDetaillsList} 
											methodForAllItems = {'getAllCharacters'}
											methodForItem = {'getCharacter'}
											randomId = {140 + 25}
										/>
export default Characters;

