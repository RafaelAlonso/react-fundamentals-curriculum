import React from 'react';
import ReactDom from 'react-dom';
import WeatherForm from './WeatherForm';

export default class Banner extends React.Component{
	static defaultProps = {
		style: { 'backgroundImage': "url('app/images/pattern.svg')" }
	};

	render(){
		return (
			<div className="wrapper" style={this.props.style}>
				<h1 className="text-center">Check the Forecast of your city!</h1>
				<WeatherForm />
			</div>
		)
	}
}