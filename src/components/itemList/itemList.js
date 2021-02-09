import React, {Component} from 'react';
import './itemList.css';
import styled from 'styled-components';

export default class ItemList extends Component {

    render() {

		const List = styled.ul`
			.list-group-item{
				cursor: pointer;
			}
		
		`
        return (
            <List className=''>
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </List>
        );
    }
}