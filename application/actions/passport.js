import asynTypes from './passport_action_types';
import {login as loginCall, logout as logoutCall} from '../api/api_calls';

export function login(params){
	return {
		apiCall: ()=>loginCall(params),
		type: asynTypes.LOGIN
	}
}

export function logout(params){
	return {
		apiCall: ()=>logoutCall(params),
		type: asynTypes.LOGOUT
	}
}