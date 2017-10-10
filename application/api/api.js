import axios from 'axios';

Object.assign(axios.defaults, {
	method: 'get',
	timeout: 5000,
	withCredentials: true
});

let ajax = (options)=>{
	return new Promise((resolve, reject)=>{
		axios(options).then((response)=>{
			if(response.status == 200){
				resolve(response);
			}else{
				reject(response);
			}
		})
	})
}

module.exports = {ajax};