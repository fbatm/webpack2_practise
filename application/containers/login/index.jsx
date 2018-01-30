import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/passport';

class LoginPage extends React.Component{
	submit(){
		let params = {
			username: this.refs.username.value,
			password: md5(this.refs.password.value)
		}
		this.props.login(params).then(()=>{
			console.warn(123)
		})
	}

	render(){
		console.warn('render login')
		return <form>
			<label>用户名<input defaultValue='' name='username' ref='username'/></label>
			<label>密码<input type='password' defaultValue='' name='password' ref='password'/></label>
			<button type='submit' onClick={this.submit}>登录</button>
		</form>
	}
}

export default connect(state=>({}), {login})(LoginPage)