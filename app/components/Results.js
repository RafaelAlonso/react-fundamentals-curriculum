import React from 'react';
import ReactDom from 'react-dom';
import queryString from 'query-string';
import { getWeatherData } from '../utils/Api';

export default class Results extends React.Component{
	state = {
		currentForecast: null,
		error: false,
		loading: true,
	}

	getWeather = async (city) => {
		const weather = await getWeatherData(city);
		console.log(weather);
		
	}

	componentDidMount(){
		const search = this.props.location.search;
		const { city } = queryString.parse(search);

		this.getWeather(city);
	}

	render(){
		return (
			<div className="results">
				<h1>Oooi pessoar</h1>
			</div>
		)
	}
}
