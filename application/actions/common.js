import asynTypes from './common_action_types';
import {asyncRequest as asyncRequestCall} from '../api/api_calls';

export function updateCommonData(data){
	return {
		data,
		type: 'UPDATECOMMONDATA'
	}
}

export function asyncRequest(params){
	return {
		apiCall: ()=>asyncRequestCall(params),
		type: asynTypes.ASYNCREQUEST
	}
}