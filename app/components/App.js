import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Banner from './Banner';

export default class App extends React.Component{
	render(){
		return (
			<div id="app">
				<Header />
				<Banner />
			</div>
		)
	}
}