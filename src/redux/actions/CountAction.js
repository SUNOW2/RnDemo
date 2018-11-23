/**
 * 描述：
 * @ClassName CountAction
 * @Author 徐旭
 * @Date 2018/11/22 14:35
 * @Version 1.0
 */
import {
	GET_CLASSIFIES
} from './actiontypes/ActionTypes';
import {
	QUERY_CLASSIFY
} from '../api/';

// 每个页面是可以有多个action的，只需要在页面中引入就好
const getClassifies = () => {
	// data: fetch(QUERY_CLASSIFY, {
	// 	method: 'POST',
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Content-Type": "application/json"
	// 	}
	// })
	// 	.then(response => response.json())
	// 	.then(responseJson => {
	// 		console.warn("responseJson = " + JSON.stringify(responseJson));
	// 		return {
	// 			data: JSON.stringify(responseJson)
	// 		};
	// 	})
	// 	.catch(error => {
	// 		console.error(error);
	// 	})
	return async (dispatch) => {
		let msg = await fetch(QUERY_CLASSIFY, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json());

		dispatch({
			type: GET_CLASSIFIES,
			data: msg
		})
	}
};

export {
	getClassifies
}

/**
 * react-redux的执行流程：
 * component -> actionCreator(data) -> reducer -> component
 */