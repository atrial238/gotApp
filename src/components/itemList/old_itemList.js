import React, {Component} from 'react';
import './itemList.css';
import styled from 'styled-components';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const ItemList = (props) => {

	const renderItems = (arr) => {
		return arr.map((item)=> {
			const {id} = item,
					lable = item.name;
			return (
				<li 
					key={id}
					className="list-group-item"
					onClick={() => props.onItemSelected(id)}
				>
					{lable}
				</li>
			)
		})
	}
	
	const	 List = styled.ul`
		.list-group-item{
			cursor: pointer;
		}
	`
	const items = renderItems(props.itemList);

	return <List className=''>{items}</List>;
	
}
ItemList.defaultProps = {
	onItemSelected: () => {},
	
}
const withData = (View, gatData) => {
	return class extends Component{
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
			componentDidCatch(){
				this.setState({error: true})
			}
		render(){
			const {itemList} = this.state;
			if(this.state.error) return <ErrorMessage/>;
			if(!itemList) return <Spinner/>;

			return <View {...this.props} itemList = {itemList}/>
	
	}
	}
}
export default withData(ItemList)