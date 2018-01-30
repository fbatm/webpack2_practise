import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider}	from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store';
import renderRoutes from './routes';
import 'es6-promise/auto';
import './assets/base.css';

let store = configureStore();

class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <MuiThemeProvider>
			<Provider store={store}>
				{renderRoutes()}
			</Provider>
		</MuiThemeProvider>
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));