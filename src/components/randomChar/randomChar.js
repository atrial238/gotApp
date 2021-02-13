import React, {Component} from 'react';
import styled from 'styled-components';
import GetResource from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';
export default class RandomChar extends Component {
	
	state = {
		char: {},
		error: false
	}
	onCharLoaded = (char) => {
		this.setState({char: char})
	}
	onError = () => {
		this.setState({
			error: true
		})
	}
	updateChar = () => {
		const gotService = new GetResource();
		const id = Math.floor(Math.random()*140 + 25);
		gotService.getCharacter(id)
			.then((res) => this.onCharLoaded(res))
			.catch(this.onError);
	}
	UNSAFE_componentWillMount(){
		this.updateChar();
		this.timerId = setInterval(this.updateChar, this.props.interval);
		
	}
	
	componentWillUnmount(){
		clearInterval(this.timerId);
	}
	render() {
		
		const showContent = this.state.error ? <ErrorMessage/> : <CharacterList propertiesChar={this.state.char}/>,
		 	RandomBlock = styled.div`
			background-color: #fff;
			padding: 25px 25px 15px 25px;
			margin-bottom: 10px;
			border-radius: 0.25rem;
			h4 {
				margin-bottom: 20px;
    			text-align: center;
				 display: flex;
				 justify-content: space-between;
				 align-items: center;
				 span{
					 color: #436672;
					 :first-child{
						 font-size: 16px;
						 color: #000;
						 font-weight: 700;
					 }
				 }
			}
			.term {
				font-weight: 700;
			}
			.list-group-item{
				padding-left: 5px;
				padding-right: 5px;
			}
			.buttonChangeChar{
				display: flex;
				justify-content: flex-end;
				margin: 10px;
			}
			`,
			Button = styled.button`
				padding: 5px 20px;
				background-color: #A8B5BD;
				border-radius: 3px;
				box-shadow: 1px 1px 3px;
				transition: all 0.1s;
				border: none;
				
				:active{
					border: none;
					outline: none;
					transform: translate(1px, 1px);
				}
				:hover{
					
				}
				`
        return (
            <RandomBlock>
               {showContent}
					<div className="buttonChangeChar">
						<Button onClick={this.updateChar}>Change characters</Button>
					</div>
            </RandomBlock>
        );
    }
}

RandomChar.defaultProps = {
	interval: 1000
}
RandomChar.propTypes = {
	interval: PropTypes.number
	// interval: (props, propName, componentName) => {

	// 	const value = props[propName];
	// 	if(typeof value === 'number' && !isNaN(value) ){
	// 		return null
	// 	}
	// 	return new TypeError(`${componentName}: ${propName} must be a number`);
	// }
}

const CharacterList = (props) => {

	const {name, gender, born, died, culture } = props.propertiesChar;
	return (
		<>
		 	<h4><span>Random Character:</span> <span>{name || <Spinner/>}</span></h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Gender </span>
						<span >{gender || <Spinner/>}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Born </span>
						<span>{born || <Spinner/>}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Died </span>
						<span>{died || <Spinner/>}</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span className="term">Culture </span>
						<span>{culture || <Spinner/>}</span>
					</li>
				</ul>
		</>
	)
}
