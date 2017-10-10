import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {updateCommonData, asyncRequest} from '../actions/common';

class HomePage extends Component{
	componentDidMount(){
		this.props.asyncRequest({test: 'abc'});
	}

	onChange=(e)=>{
		this.props.dispatch(updateCommonData({data: e.target.value}));
	}

	render(){
		return <div>
			<textarea value={this.props.value} onChange={this.onChange}/>
		</div>
	}
}

export default connect(state=>({value: state.common.data}), {asyncRequest})(HomePage)