import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/error.jpg';

export default function ErrorMessage(){
	const Error  = styled.div`
		position: relative;
		.error_message{
			font-size: 2rem;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 100%;
			text-align: center;
			transform: translate(-50%, -50%);
			color: red;
			font-weight: 500;
		}
		img{
			width: 100%;
		}
	`
	return (
		<Error >
			<img src={img} alt="error"/>
			<div className="error_message">Something went wrong</div>
		</Error>
	)
}