import React, {Component} from 'react';
import styled from 'styled-components';
import GetResource from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {
	constructor(){
		super();
		this.updateChar();
		this.updateChar = this.updateChar.bind(this)
	}
	
	state = {
		char: {},
		error: false
	}
	onCharLoaded = (char) => this.setState({char})
	onError = () => {
		this.setState({
			error: true
		})
	}
	updateChar(){
		const gotService = new GetResource();
		const id = Math.floor(Math.random()*140 + 25);
		gotService.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		
		const showContent = this.state.error ? <ErrorMessage/> : <CharacterList state={this.state}/>,
		 	RandomBlock = styled.div`
			background-color: #fff;
			padding: 25px 25px 15px 25px;
			margin-bottom: 40px;
			border-radius: 0.25rem;
			h4 {
				margin-bottom: 20px;
    			text-align: center;
				 display: flex;
				 justify-content: space-between;
				 align-items: center;
				 span{
					 color: blue;
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
			`
        return (
            <RandomBlock>
               {showContent}
            </RandomBlock>
        );
    }
}

const CharacterList = ({state:{char}}) => {
	
	const {name, gender, born, died, culture } = char;
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

