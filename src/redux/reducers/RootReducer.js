/**
 * 描述：
 * @ClassName RootReducer
 * @Author 徐旭
 * @Date 2018/11/22 16:40
 * @Version 1.0
 */
// RootReducer中存放的是各个页面的Reducer，推荐的做法是
// 一个页面公用一个Reducer，便于之后的管理
// Reducer是纯函数，里面不应该有过多的逻辑
import {combineReducers} from 'redux';
import CountReducer from './CountReducer';

// 取决于这里加入了多少 reducer
const RootReducer = combineReducers({
	countReducer: CountReducer
});

export default RootReducer;