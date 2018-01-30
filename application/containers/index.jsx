import React from 'react';
import {Link} from 'react-router-dom';
import connect from 'react-redux';

export default class MainPage extends React.Component{
	render(){
		return <div className='main'>
			<ul className='appbar'>
				<li><Link to='/login'>login</Link></li>
				<li><Link to='/map'>map</Link></li>
			</ul>
			<div className='footer'></div>
		</div>
	}
}