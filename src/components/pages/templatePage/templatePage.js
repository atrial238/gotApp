import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import RowBlock from '../../rowBlock/rowBlock';
import ErrorMessage from '../../errorMessage/errorMessage';
import GetResource from '../../../services/gotService';
import {withRouter} from 'react-router-dom';

class TemplatePage extends Component {

	state = {
		error: false,
		isItemDetails: false
	}

	gotService = new GetResource();
	
	componentDidCatch(){
		this.setState({error: true})
	}

	render(){
		if(this.state.error){
			return <ErrorMessage/>
		}
		const itemList = (
			<ItemList 
				onItemSelected={(itemId)=> {
					this.setState(({isItemDetails: true}));
					this.props.history.push(itemId);
				}}
				getData = {this.gotService[this.props.methodForAllItems]}
			/>
		)
		return !this.state.isItemDetails ? <RowBlock left={itemList} /> : null;
	}
}
export default withRouter(TemplatePage);