import React from 'React';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {HomePage} from '../containers';

export default function renderRoutes(){
	return (<Router history={browserHistory}>
		<Route path='/' component={HomePage}/>
	</Router>)
}