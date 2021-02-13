import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/characterPage/characterPage';
import HousesPage from '../pages/housesPage/housesPage';
import BooksPage from '../pages/booksPage/bookPage';
import BooksItem from '../pages/booksItem/booksItem';
import HouseItem from '../pages/houseItem/houseItem';
import CharacterItem from '../pages/characterItem/characterItem';
import MainPage from '../mainPage/mainPage';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';

import './app.css';
export default class App extends Component {
	constructor(){
		super();
	}
	state = {
		error: false
	}
	componentDidCatch(){
		
		this.setState({error: true})
	}
	
	render(){
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
						<Switch>
							<Route path='/' exact component={MainPage}/>
							<Route path="/characters" exact component={CharacterPage}/>
							<Route path="/houses" exact component={HousesPage}/>
							<Route path="/books" exact component={BooksPage}/>
							<Route path="/books/:id" render={({match}) => {
									const {id} = match.params;
										return <BooksItem bookId ={id}/>
									}
								}
							/>
							<Route path="/houses/:id" render={({match}) => {
									const {id} = match.params;
										return <HouseItem houseId ={id}/>
									}
								}
							/> 
							<Route path="/characters/:id" render={({match}) => {
									const {id} = match.params;
										return <CharacterItem characterId ={id}/>
									}
								}
							/> 
							<Route path='*'><NoMatch/></Route>
						</Switch>
					
					</Container>
				</div>
			</Router>
	  );
	}
};

const NoMatch = () =>{
	let location = useLocation();
 
	return (
	  <div>
		 <h3 style={{color: 'red'}}>
			No match for <code>{location.pathname}</code>
		 </h3>
	  </div>
	);
}

