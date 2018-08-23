import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

export default class WeatherForm extends React.Component{
	state = {
		city: ''
	}

	onChange = (event) => {
		const city = event.target.value;
		return this.setState(() => ({ city: city }))
	}

	render(){
		return (
			<div className="formcast" style={{flexDirection: this.props.direction}}>
				<div className="formcast-input">
					<input 
						type="text" 
						className="form-control" 
						placeholder="São Paulo, SP" 
						onKeyUp={this.onChange}
					/>
				</div>
				<div className="formcast-input">
					<Link 
						className="btn btn-success"
						to={{
							pathname: '/results',
							search: '?city=' + this.state.city 
						}}
					>
						Check the forecast!
					</Link>
				</div>
			</div>
		)
	}
}