import React, {Component} from 'react';
import './itemList.css';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class ItemList extends Component {

	state = {
		itemList: null,
		error: false
	}
	UNSAFE_componentWillMount(){

		const {getData} = this.props;

		getData()
			.then((itemList) => this.setState({itemList}))
			.catch(() => this.setState({error: true}))
	}
	renderItems = (arr) =>{
		
		return arr.map((item)=> {
			const {id} = item,
					lable = item.name;
			return (
				<li 
					key={id}
					className="list-group-item"
					onClick={() => this.props.onItemSelected(id)}
				>
					{lable}
				</li>
			)
		})
	}
	componentDidCatch(){
		this.setState({error: true})
	}
    render() {
		const {itemList} = this.state,
				 List = styled.ul`
			.list-group-item{
				cursor: pointer;
			}
		
		`
		if(this.state.error) return <ErrorMessage/>;
		if(!itemList) return <Spinner/>;
		
		const items = this.renderItems(itemList);

		return <List className=''>{items}</List>;
	}
}