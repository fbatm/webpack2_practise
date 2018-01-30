let asyn_api_middleware = ({dispatch, getState})=>{
	return (next)=>{
		return (action)=>{
			const {type, apiCall, payload = {}} = action;

			if(!type){
				throw new Error('a type must be provided for an action');
			}

			//非数据请求
			if(typeof type == 'string'){
				return next(action);
			}

			if(!apiCall){
				throw new Error('apiCall must be provided for an api request');
			}

			dispatch({payload, type: type.request});

			return apiCall().then(
				(result)=> Promise.resolve(dispatch({payload, data: result, type: type.done})),
				(result)=> Promise.resolve(dispatch({payload, error: result, type: type.fail}))
			)
		}
	}
}

export default asyn_api_middleware;