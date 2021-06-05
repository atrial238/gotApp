import React, {Component} from 'react';
import styled from 'styled-components';

export default class MainPage extends Component {

	state = {
		flag: false
	}
	handleClick = () => {
		const elem = document.querySelector('.h1'),
				button = document.querySelector('.button'),
				left = document.querySelector('.left'),
				right = document.querySelector('.right'),
				wrapper = document.querySelector('.wrapper');
		elem.style.top = '-100%' ;
		button.style.transform = 'rotate(90deg) translate(-10%, 250%)';
		left.style.transform = 'translateX(-120%)';
		right.style.transform = 'translateX(120%)';
		wrapper.style.transform = 'translateY(-100%)';
		
		
	}
	render(){
		const H1 = styled.h1`
			color: #000;
			position: absolute;
			top: 30px;
			left: 50%;
			transform: translateX(-50%);
			transition: all 1s ease;
			z-index: 2;
		`
		const Button = styled.button`
			position: absolute;
			padding: 10px 30px;
			top: 60%;
			left: 0;
			transform: translate(-50%, 50%);
			transition: all 1s ease;
		`
		const WrapperMainPage = styled.div`
			
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			transition: all 1s ease;
			transition-delay: 2s;
			display: flex;
			
		`
		const GateLeft = styled.div`
			background-color: green;
			flex: 0 0 50%;
			transition: all 1s ease;
			transition-delay: 1s;
			background: url('img/left.jpg') center right / cover no-repeat;
		`
		const GateRight = styled.div`
			position: relative;
			background-color: green;
			flex: 0 0 50%;
			transition: all 1s ease;
			transition-delay: 1s;
			background: url('img/right.jpg') center left / cover no-repeat;
	`
		return (
			<>
			<WrapperMainPage className={'wrapper'}>
				<H1 className={'h1'}>This is the very First Page</H1>
				<GateLeft className={'left'}>
				</GateLeft>
				<GateRight className={'right'}>
					<Button className={'button'} onClick={ this.handleClick}>This is the very First Button</Button>
				</GateRight>
			</WrapperMainPage>
			</>
		)
	}

}
{/* <Link to="/characters/"></Link> */}

