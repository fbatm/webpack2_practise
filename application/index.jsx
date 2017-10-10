import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider}	from 'react-redux';
import configureStore from './store';
import renderRoutes from './routes';
import 'es6-promise/auto';

let store = configureStore();

class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <Provider store={store}>
			<div>
				<h1>welcome.</h1>
				{renderRoutes()}
			</div>
		</Provider>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));