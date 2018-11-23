/**
 * 描述：
 * @ClassName CountReducers
 * @Author 徐旭
 * @Date 2018/11/22 14:39
 * @Version 1.0
 */
import {
	GET_CLASSIFIES
} from '../actions/actiontypes/ActionTypes';

// 原始默认state
const defaultState = {
	count: 5,
	factor: 1,
	data: ''
};

export default function counter(state=defaultState, action) {
	switch(action.type) {
		case GET_CLASSIFIES:
			return {...state, count: state.count + state.factor, data: action.data};

		default:
			return state;
	}
}