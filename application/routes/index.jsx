import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../containers';

export default function renderRoutes(){
	return (<Router>
		<Route exact path='/' component={HomePage}/>
	</Router>)
}