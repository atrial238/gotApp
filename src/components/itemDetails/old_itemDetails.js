import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const Field = ({item, field, label}) => {
		return (
			<li className="list-group-item d-flex justify-content-between">
				<span className="term">{label}</span>
				<span>{item[field]}</span>
         </li>
		)
}
export {Field};

export default class ItemDetails extends Component {

	state = {
		item: null,
		error: false
	}
	updateItem(){
		const {itemId, getData} = this.props;
		if(!itemId){
			return;
		}
		getData(itemId)
			.then((res) => this.setState({item: res}))
			.catch(() => this.setState({error: true}))
	}
	
	UNSAFE_componentWillMount(){
		
		this.updateItem();
	}
	componentDidCatch(){
		this.setState({error: true});
	}

	componentDidUpdate(prevProps ){

		if(this.props.itemId !== prevProps.itemId){
			this.setState(({item: {name: <Spinner/>, gender: <Spinner/>, born:  <Spinner/>, died:  <Spinner/>, culture:  <Spinner/>}}))
			this.updateItem();
		}
	}
	render() {

		const ItemDetails = styled.div`
				background-color: #fff;
				padding: 25px 25px 15px 25px;
				margin-bottom: 40px;
				border-radius: 0.25rem;
				h4{
					margin-bottom: 20px;
					text-align: center;
				}

		`;
		const PleaseSelect = styled.span`
			color: #fff;
			text-align: center;
			font-size: 26px;
			display: block;
		`
		if(this.state.error){
			return <ErrorMessage/>
		}
		if(!this.state.item){
			return <PleaseSelect>{this.props.pleaseSelectItem}</PleaseSelect> 
		}
		const {item} = this.state;

		const {name} = item;
		
        return (
            <ItemDetails>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
							 React.Children.map(this.props.children, (child) => {
								
								return React.cloneElement(child, {item})
							 })
						  }
                </ul>
            </ItemDetails>
        );
    }
}