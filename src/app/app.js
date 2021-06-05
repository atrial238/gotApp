import React, {Component} from 'react';
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';

import {Header, ErrorMessage, NoMatch} from '../components' 
import {MainPage, CharacterItem, HouseItem, BooksItem, Books, Houses, Characters} from '../pages';
import './app.css';

export default class App extends Component {

	state = {error: false}
	
	componentDidCatch =() => this.setState({error: true});
	
	render(){
		if(this.state.error) return <ErrorMessage/>
			
		return (
			<Router>
				<div className = "app"> 
					<Container>	<Header />		</Container>
					
					<Container>
						<Switch>
							<Route path='/' exact component={MainPage}/>
							<Route path="/characters" exact component={Characters}/>
							<Route path="/houses" exact component={Houses}/>
							<Route path="/books" exact component={Books}/>
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