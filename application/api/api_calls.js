import {ajax} from './api';

module.exports = {
	asyncRequest: (params)=>{
		return ajax({
			url: '/test',
			method: 'get',
			params
		})
	}
}