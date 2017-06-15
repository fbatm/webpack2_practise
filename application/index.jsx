import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider}	from 'react-redux';
import configureStore from './store';
import renderRoutes from './routes';

let store = configureStore();

class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <Provider store={store}>
			{renderRoutes()}
		</Provider>
	}
}

ReactDOM.render(<App/>, document.body);