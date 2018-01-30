//https://github.com/axios/axios
import axios from 'axios';
let pendingRequests = [];
let CancelToken = axios.CancelToken;
let axiosInstance = axios.create();

Object.assign(axiosInstance.defaults, {
	method: 'get',
	timeout: 5000,
	withCredentials: true
});

let ajax = (config)=>{
	let cancel, p;
	if(!config.disableCancel){
		config.cancelToken = new CancelToken((c)=>{cancel = c});
	}
	p = new Promise((resolve, reject)=>{
		axiosInstance(config).then((response)=>{
			removeCertainRequest(p);
			if(response.status == 200){
				resolve(response.data);
			}else{
				reject(response.data);
			}
		}).catch((error)=>{
			removeCertainRequest(p);
			if(!axios.isCancel(error)){
				reject(error.response);
			}
		})
	});
	if(!config.disableCancel){
		pendingRequests.push({request: p, key: config.apiCallName, cancel});
	}
	return p;
}
function removeCertainRequest(request){
	for(var i = 0;pendingRequests[i];i++){
		if(pendingRequests[i].request === request){
			break;
		}
	}
	pendingRequests.splice(i, 1);
}

//传入指定的request对象则仅取消该请求，不传入参数则取消所有等待中的请求
Array.prototype.findAndRemove = (element)=>{
	for(var i = 0;i < this.length;i++){
		if(this[i] === element){
			break;
		}
	}
	if(i < this.length){
		this.splice(i, 1);
		return true;
	}
}
function cancelPendingRequests(){
	var requests = Array.prototype.concat.apply([], arguments);
	if(!requests.length){
		pendingRequests.map(({cancel})=>{
			cancel();
		})
		pendingRequests = [];
	}else{
		for(var i = pendingRequests.length - 1;pendingRequests[i] && requests.length;i--){
			if(requests.findAndRemove(pendingRequests[i].request)){
				pendingRequests[i].cancel();
				pendingRequests.splice(i, 1);
			}
		}
	}
		
}

module.exports = {ajax, cancelPendingRequests};