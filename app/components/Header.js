import React from 'react';
import ReactDom from 'react-dom';
import WeatherForm from './WeatherForm';

export default class Header extends React.Component{
	render(){
		return (
			<div id="header">
				<h1>Formcaster</h1>
				<WeatherForm direction='row'/>
			</div>
		)
	}
}