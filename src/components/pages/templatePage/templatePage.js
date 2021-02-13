import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import RowBlock from '../../rowBlock/rowBlock';
import ErrorMessage from '../../errorMessage/errorMessage';
import GetResource from '../../../services/gotService';
import {withRouter} from 'react-router-dom';
import {Col, Row} from 'reactstrap';
import RandomChar from '../../randomChar/randomChar';

class TemplatePage extends Component {

	state = {
		showHideCard: true,
		error: false,
		isItemDetails: false
	}

	gotService = new GetResource();
	
	componentDidCatch(){
		this.setState({error: true})
	}
	toggelCardCharacter = () => {
		this.setState({showHideCard: !this.state.showHideCard})
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
	
		if(!this.state.isItemDetails) {
			const characterList = this.state.showHideCard ? <RandomChar 
																				typeDetailList={this.props.typeDetailList} 
																				interval={100000}
																				titleButton={this.props.titleButton}
																				methodForItem={this.props.methodForItem}
																				randomId={this.props.randomId}
																			/> : null;
			return 	(
				<>
				<Row>
					<Col lg={{size: 6, offset: 0}} >
						<RowBlock left={itemList}/>
					</Col>
					<Col lg={{size: 6, offset: 0}}>
						{characterList}
							<button onClick={this.toggelCardCharacter}>show/hide card with characters</button>
					</Col>
				</Row>
				</>
			)
		}else{
			return null;
		}
	}
}
export default withRouter(TemplatePage);

