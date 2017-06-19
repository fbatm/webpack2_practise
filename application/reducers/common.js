export default function common(state={data: ''}, action){
	let newState = {};
	switch(action.type){
		case 'SETCOMMONDATA':
			newState = Object.assign({}, state, action.data);
			break;
		default:
			break;

	}
	return newState;
}