import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import raven_left from '../../assets/img/raven_left.png';
import raven_right from '../../assets/img/raven_right.png';

const MainPage = () => {
	let history = useHistory();

	const h1 = useRef(null),
			button = useRef(null),
			gateLeft = useRef(null),
			gateRight = useRef(null);

	const H1 = styled.h1`
				color: white;
				position: absolute;
				width: 100%;
				text-align: center;
				top: 1rem;
				left: 50%;
				transform: translateX(-50%);
				transition: all 1s ease;
				z-index: 3;
				text-shadow: 0 0 7px black;
			`,
			Button = styled.button`
				color: black;
				background: white;
				position: absolute;
				padding: .3rem 5rem;
				bottom: 5rem;
				left: 50%;
				transform: translate(-50%, 0%);
				transform-origin: 50% 50%;
				transition: all 1s ease;
				z-index: 3;
				box-shadow: 0 0 .7rem black;
				font-size: 1.5rem;
				border-radius: .4rem;
				font-weight: 700;
			`,
			WrapperMainPage = styled.div`
				color: white;
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				display: flex;
			`,
			GateLeft = styled.div`
				position: relative;
				z-index: 1;
				flex: 0 0 50%;
				transition: all 1s ease;
				transition-delay: 1s;
				background: rgb(165, 164, 164);
				display: flex;
				justify-content: flex-end;
				align-items: center;
						img {
							width: 80%;
							object-fit: contain;
						}
			`,
			GateRight = styled.div`
				position: relative;
				z-index: 1;
				flex: 0 0 50%;
				transition: all 1s ease;
				transition-delay: 1s;
				background: rgb(165, 164, 164);
				display: flex;
				justify-content: flex-start;
				align-items: center;
						img {
							width: 82%;
							object-fit: contain;
						}
			`;

	const handleClick = () => {
		h1.current.style.top = '-100%';
		button.current.style.transform = 'rotateX(90deg) translate(-50%, 0%)';
		gateLeft.current.style.transform = 'translateX(-120%)';
		gateRight.current.style.transform = 'translateX(120%)';
		setTimeout(() => history.push("/characters"), 1500)
	}

	return (
		<WrapperMainPage className={'wrapper'}>
			<H1 className={'h1'} ref={h1}>Game of Thrones Database</H1>
			<GateLeft className={'left'} ref={gateLeft}><img src={raven_left} alt='raven'/> </GateLeft>
			<GateRight className={'right'} ref={gateRight}><img src={raven_right} alt='raven'/> </GateRight>
			<Button className={'button'} onClick={handleClick} ref={button}>Enter</Button>
		</WrapperMainPage>
	)
}
export default MainPage;

