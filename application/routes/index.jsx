import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../containers';
import TestPage from '../containers/simpleTest';
import MaterialUiTestPage from '../containers/MaterialUiTestPage';
import MapPage from '../containers/map';
import Bundle from '../bundle';
import LoginBundle from 'bundle-loader?lazy!../containers/login';

const Login = (props)=>{
	return <Bundle load={LoginBundle}>{(Login)=>{<Login {...props}/>}}</Bundle>
}

export default function renderRoutes(){
	return (<Router>
		<div className='h100per'>
			<Route exact path='/' component={HomePage}/>
			<Route path='/test' component={TestPage}/>
			<Route path='/test-ui' component={MaterialUiTestPage}/>

			<Route path='/login' component={Login}/>
			<Route path='/map' component={MapPage}/>
		</div>
	</Router>)
}