import {ASYNCREQUEST} from '../actions/common_action_types';

export default function common(state={data: ''}, action){
	let newState = {};
	switch(action.type){
		case 'UPDATECOMMONDATA':
			newState = Object.assign({}, state, action.data);
			break;
		case ASYNCREQUEST.request:
			newState = Object.assign({}, state, {asyncRequesting: true});
			break;
		case ASYNCREQUEST.done:
			newState = Object.assign({}, state, {asyncRequesting: false});
			break;
		case ASYNCREQUEST.fail:
			newState = Object.assign({}, state, {asyncRequesting: false});
			break;
		default:
			break;

	}
	return newState;
}