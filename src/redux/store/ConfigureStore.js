/**
 * 描述：
 * @ClassName CountStore
 * @Author 徐旭
 * @Date 2018/11/22 15:07
 * @Version 1.0
 */
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
// redux-thunk是用来发送异步请求的中间件，用了thunk之后，
// 一般的操作是将网络请求的方法放在action中
import thunk from 'redux-thunk';
// redux-logger是打印logger的中间件
import createLogger from 'redux-logger';
import RootReducer from '../reducers/RootReducer';

const configureStore = preloadState => {
	// createStore(reducer, [initState, enhancer]):创建一个Redux Store来存放所有的
	// state，一个应用只能有一个store。函数返回store对象.enhancer：一个中间件
	return createStore(
		RootReducer,
		preloadState,
		compose(
			applyMiddleware(createLogger, thunk)
		)
	);
};

const store = configureStore();
export default store;