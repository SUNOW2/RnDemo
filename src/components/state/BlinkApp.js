/**
 * 描述：
 * @ClassName BlankApp
 * @Author 徐旭
 * @Date 2018/11/15 14:32
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	Text,
	View
} from 'react-native';

/**
 * 我们使用两种数据来控制一个组件：props和state。
 * props是在父组件中指定，而且一经指定，在被指定的组件的生命周期内则不再改变。
 * 对于需要改变的数据，我们需要使用state
 */
class Blink extends Component {
	constructor(props) {
		super(props);
		this.state = {showText: true};

		// 每1000毫秒对showText状态做一次取反操作
		setInterval(() => {
			// state的修改必须通过setState()方法
			// this.stat.likes=100,// 直接赋值无效
			// setState是一个merge操作，只修改指定属性，不影响其他属性
			// setState是一个异步操作，修改不会马上生效
			this.setState(previousState => {
				return {showText: !previousState.showText};
			});
		}, 1000);
	}

	render() {
		// 根据showText的值决定是否显示text内容
		let display = this.state.showText ? this.props.text : '';
		return (
			<Text>{display}</Text>
		);
	}
}

export default class BlinkApp extends Component {
	render() {
		return (
			<View>
				<Blink text='I love to blink'/>
				<Blink text='Yes blinking is so great'/>
				<Blink text='Why did they ever take this out of HTML'/>
				<Blink text='Look at me look at em look at me'/>
			</View>
		)
	}
}