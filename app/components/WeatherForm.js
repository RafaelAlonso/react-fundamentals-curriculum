import React from 'react';
import ReactDom from 'react-dom';

export default class WeatherForm extends React.Component{
	render(){
		return (
			<form action="#" className="formcast">
				<div className="form-container">
					<input type="text" className="form-control" placeholder="São Paulo, SP"/>
				</div>
				<div className="form-container">
					<input type="submit" value="Check the forecast!" className="btn btn-success"/>
				</div>
			</form>
		)
	}
}