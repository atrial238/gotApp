import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
	 @media (max-width: 600px){
		flex-direction: column;
		justify-content: center;
	 }
`;

const HeaderTitle = styled.h3`
    font-size: 2rem;
    color: #fff;
    margin: 0;
	 @media (max-width: 600px){
		margin-bottom: 10px;
	 }
	 @media (max-width: 600px){
		/* ont-size: 2.5rem; */
	 }
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
	 @media (max-width: 600px){
		margin-bottom: 10px;
	 }
    li {
        margin-right: 20px;
        font-size: 18px;
		  &:last-child {
			  margin-right: 0;
		  }
		  a {
			  position: relative;
			  &:after{
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					bottom: -2px;
					left: 0;
					transform: scale(0);
					transition: all .4s;
					background: white;
			  }
			  &:hover {
				  &:after {
					  transform: scale(1);
				  }
			  }
			  &.active_link {
				  cursor: auto;
					&:after {
						transform: scale(1);
					}
			  }
		  }
    }
`;

const Header = () => {
	let classActiveChar = '', classActiveHouses = '', classActiveBooks = '';

	const {pathname} = useLocation();

	switch(pathname){
		case '/characters/':
			classActiveChar = 'active_link';
			break;
		case '/houses/':
			classActiveHouses = 'active_link';
			break;
		case '/books/':
			classActiveBooks = 'active_link';
			break;
		default:

	}
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link  to ='/'>Game of Thrones DB</Link>
            </HeaderTitle>
            <HeaderLinks>
                <li><Link to="/characters/" className={classActiveChar} >Characters</Link></li>
                <li><Link to="/houses/" className={classActiveHouses} >Houses</Link></li>
                <li><Link to='/books/' className={classActiveBooks} >Books</Link></li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;