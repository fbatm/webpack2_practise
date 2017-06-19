import {createAsyncActionsTypes} from './asyn_action_type_util';

// const asynTypes = createAsyncActionsTypes(['UPDATECOMMONDATA']);

export function updateCommonData(data){
	return {
		data,
		type: 'UPDATECOMMONDATA'//createAsyncActionsTypes('UPDATECOMMONDATA')
	}
}