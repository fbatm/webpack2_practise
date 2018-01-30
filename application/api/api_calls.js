import {ajax} from './api';

module.exports = {
	asyncRequest: (params)=>{
		return ajax({
			url: '/test',
			method: 'get',
			params
		})
	},

	login: (data)=>{
		return ajax({
			url: '/login',
			method: 'post',
			data
		})
	},

	logout: (data)=>{
		return ajax({
			url: '/logout',
			method: 'post',
			data
		})
	},

	getBMap: ()=>{
		return ajax({
			url: '/api/ajax/getBMap',
			method: 'get'
		})
	}
}