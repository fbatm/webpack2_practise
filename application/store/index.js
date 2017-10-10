import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import apiMiddleware from '../middleware/asyn_api_middleware';
import rootReducers from '../reducers';

export default function configureStore(initState){
	return createStore(
		rootReducers,
		initState,
		applyMiddleware(
			apiMiddleware,
			createLogger()
		)
	);
}