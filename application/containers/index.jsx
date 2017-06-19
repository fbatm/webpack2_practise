import React, {Component} from 'React';
import {connect}          from 'react-redux';
import {updateCommonData} from '../actions/common';

class HomePage extends Component{
	render(){
		return <div>
			home.<input value={this.props.value} onChange={this.onChange}/>
		</div>
	}

	onChange=(e)=>{
		this.props.dispatch(updateCommonData({data: e.target.value}));
	}
}

export default connect(state=>{return {value: state.common.data}})(HomePage)