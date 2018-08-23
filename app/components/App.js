import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Banner from './Banner';
import Results from './Results';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component{
	render(){
		return (
			<Router>
				<div id="app">
					<Header />
					<Switch>
						<Route exact path='/'  	component={Banner} />
						<Route path='/results'  component={Results} />
						{/*<Route path='/details' 	component={Details} />*/}
						<Route render={() => <p>Page Not Found</p> }/>
					</Switch>
				</div>
			</Router>
		)
	}
}