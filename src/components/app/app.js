import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage/characterPage';
import HousesPage from '../pages/housesPage/housesPage';
import BooksPage from '../pages/booksPage/bookPage';
import BooksItem from '../pages/booksItem/booksItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';
export default class App extends Component {
	constructor(){
		super();
	}
	state = {
		showHideCard: true,
		error: false
	}
	componentDidCatch(){
		console.log('error');
		this.setState({error: true})
	}
	toggelCardCharacter = () => {
		this.setState({showHideCard: !this.state.showHideCard})
	}
	
	render(){
		
		const characterList = this.state.showHideCard ? <RandomChar/> : null;
		
		if(this.state.error){
			return <ErrorMessage/>
		}
		return (
			<Router>
				<div className = "app"> 
					<Container>
						<Header />
					</Container>
					<Container>
							<Row>
								<Col lg={{size: 5, offset: 0}}>
								{characterList}
									<button onClick={this.toggelCardCharacter}>show/hide card with characters</button>
								</Col>
							</Row>
							<Route path="/characters" component={CharacterPage}/>
							<Route path="/houses" component={HousesPage}/>
							<Route path="/books" exact component={BooksPage}/>
							<Route path="/books/:id" render={({match}) => {
								const {id} = match.params;
								return <BooksItem bookId ={id}/>
							}
							}/> 
					
							
					</Container>
				</div>
			</Router>
	  );
	}
};

