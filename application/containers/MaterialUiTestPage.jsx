import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import AppBar from 'material-ui/AppBar';

class HomePage extends Component{
	componentDidMount(){
		new iScroll(this.refs.wapper, { mouseWheel: true });
	}

	render(){
		return <div style={{position: 'relative'}}>
			<div style={{height: '50px', textAlign: 'center', verticalAlign: 'middle'}}>
				<img src='/a' width='100px' height='20px'/>
				<input required type='number' min='5' max='10' step='0.5'/>
				<video src='http://goss.vcg.com/html/video/VCGpromo.mp4' poster='http://goss.vcg.com/1e5501a0-ba10-11e7-9289-cf525e028cd2.jpg'></video>
			</div>
			<div style={{display: 'flex', height: '50px'}}>
				<span style={{margin: 'auto'}}>asd</span>
			</div>
			<div style={{display: 'flex', height: '50px', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
				<div style={{width: '30px', height: '30px', border: 'solid 1px #000'}}></div>
				<div style={{width: '30px', height: '30px', border: 'solid 1px #000'}}></div>
				<div style={{width: '30px', height: '30px', border: 'solid 1px #000'}}></div>
				<div style={{width: '30px', height: '30px', border: 'solid 1px #000'}}></div>
			</div>
			<div style={{width: '100%', height: '50px'}}>
				<div style={{float: 'right', padding: '15px', border: 'solid 1px #000'}}>1</div>
				<div style={{float: 'left', padding: '15px', border: 'solid 1px #000'}}>2</div>
			</div>
			<div style={{position: 'absolute', top: '200px', left: 0, width: '100%', touchAction: 'none'}} ref='wapper'>
				<div style={{position: 'absolute', width: '100%'}}>
					<div style={{height: '2000px', backgroundColor: 'lightblue'}}></div>
				</div>
			</div>
		</div>
	}
}

export default connect()(HomePage) 