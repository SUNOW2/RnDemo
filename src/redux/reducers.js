/**
 * 描述：
 * @ClassName reducers
 * @Author 徐旭
 * @Date 2018/11/22 10:10
 * @Version 1.0
 */
/**
 * 应用中所有的state都以一个对象树的形式存储在一个单一的store中。唯一
 * 改变state的办法是出发action，一个描述发生什么的对象
 */
import {createStore} from 'redux';
/**
 * 这是一个reducer，形式为(state, action) => state 的纯函数
 * 描述了action如何把state转变成下一个state。
 *
 * state的形式取决于你，可以是几本类型、数组、对象
 * 甚至是 Immutable.js 生成的数据结构。唯一的要点是
 * 当state变化时需要返回全新的对象，而不是修改传入的参数
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用于项目即可
 */
function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

/**
 * 创建 Redux store来存放应用的状态。
 * API 是 {subscribe, dispatch, getState}
 */
let store = createStore(counter);

/**
 * 可以手动订阅更新，也可以事件绑定到试图层
 */
store.subscribe(() => {
	console.log(store.getState());
});

/**
 * 改变内部state唯一方法是dispatch一个action。
 * action可以被序列化，用日记记录和存储下来，后期还可以以回访的方式执行
 */
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});


/**
 * 应该把要做的修改变成一个普通对象，这个对象叫做action，而不是直接修改state。
 * 然后编写专门的函数来决定每个action如何改变应用的state，这个函数叫做reducer。
 *
 * Redux没有Dispatcher且不支持多个store。相反，只有一个单一的store和一个根级
 * reduce函数（reducer）。随着应用不断变大，你应该把根级的reducer拆成多个小的
 * reducers，分别独立地操作 state 树的不同部分而不是添加新的stores。这就像一个
 * React应用只有一个根级的组件，这个根组件又由很多小组件构成。
 */


/**
 * Redux的三大原则
 *
 * 1、单一数据源
 * 整个应用的state被存储在一棵object tree中，并且这个object tree只存在唯一一个store
 * 2、State是只读的
 * 唯一改变state的方法就是触发action，action是一个用于描述已发生事件的普通对象
 * 这就保证了视图和网络请求都不能直接修改state，相反，它们只能表达想要修改的意图。
 * store.dispatch({
 *   type: 'COMPLETE_TODO',
 *   index: 1
 * })
 *
 * store.dispatch({
 *   type: 'SET_VISIBILITY_FILTER',
 *   filter: 'SHOW_COMPLETED'
 * })
 * 3、使用纯函数来执行修改
 * 为了描述action如何改变state tree，需要编写reducers
 * reducer只是一些纯函数，它接受先前的state和action，并返回新的state
 * function visibilityFilter(state='SHOW_ALL', action) {
 *   switch (action.type) {
 *      case 'SET_VISIBILITY_FILTER':
 *        return action.filter
 *      default:
 *        return state
 *   }
 * }
 *
 * function todos(state=[], action) {
 *   switch(action.type) {
 *      case 'ADD_TODO':
 *        return [
 *          ...state,
 *          {
 *            text: action.text,
 *            completed: false
 *          }
 *        ]
 *      case 'COMPLETE_TODO':
 *        return state.map((todo, index) => {
 *          if(index === action.index) {
 *            return Object,assign({}, todo, {
 *              completed: true
 *            })
 *          }
 *          return todo;
 *        })
 *      default:
 *        return state
 *   }
 * }
 *
 * import {combineReducers, createStore} from 'redux'
 * let reducer = combineReducers({visibilityFilter, todos})
 * let store = createStore(reducer)
 */