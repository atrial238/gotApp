import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GetResource from '../../services/gotService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import PropTypes from 'prop-types';

 const RandomChar = ({interval, typeDetailList, titleButton, methodForItem, randomId}) => {
	const [char, updateChar] = useState([]);
	const [error, updateError] = useState(false);

	const gotService = new GetResource();

	useEffect(() => { 
		updateCard();
		let timerId = setInterval(updateCard, interval);
		return () => clearInterval(timerId);
	}, [])

	function updateCard(){
		let id = Math.floor(Math.random() * randomId);
		if(!id) ++id;
		gotService[methodForItem](id)
			.then((char) =>updateChar(char))
			.catch(() => updateError(error => error = true));
	}
	
	const showContent = error ? <ErrorMessage/> : typeDetailList(char),
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
					<Button onClick={updateCard}>{titleButton}</Button>
				</div>
			</RandomBlock>
		);
    
}// end RandomChar ==========================================================================
export default RandomChar;

RandomChar.defaultProps = {
	interval: 1000
}
RandomChar.propTypes = {
	interval: PropTypes.number
}

