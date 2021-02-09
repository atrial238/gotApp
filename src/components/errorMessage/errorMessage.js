import React from 'react';
import styled from 'styled-components';
import img from './error.jpg'

export default function ErrorMessage(){
	const Error  = styled.div`
		#some{
			color: red;
			font-weight: 400;
		}
		img{
			width: 100%;
		}
		
	`
	return (
		<Error >
			<img src={img} alt="error"/>
			<span id="some">Something goes wrog</span>
		</Error>
	)
}