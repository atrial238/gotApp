import React from 'react';
import TemplatePage from '../templatePage/templatePage';
import Spinner from '../../spinner/spinner';

const HouseDetaillsList = (char) => {
	const {name, region, words } = char;
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
		 	<h4><span>Random house:</span> <span>{name || <Spinner/>}</span></h4>
				<ul className="list-group list-group-flush">
					<Field label={'Region'} field={region}/>
					<Field label={'Words'} field={words}/>
				</ul>
		</>
	)
}

const HousePage = () => <TemplatePage 
									titleButton={'Change house'}
									typeDetailList ={HouseDetaillsList} 
									methodForAllItems = {'getAllHouses'}
									methodForItem = {'getHouse'}
									randomId = {11}
								/>;
export default HousePage;

