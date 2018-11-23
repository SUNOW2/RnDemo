/**
 * Created by 徐旭 on 2018/11/15
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

/**
 * 大多数组件在创建时就可以使用各种参数来进行定制。
 * 用于定制的这些参数就成为props(属性)
 */
class Greeting extends Component {
	render() {
		return (
			<View style={styles.greeting}>
				<Text>Hello, {this.props.name}</Text>
			</View>
		);
	}
}

export default class LotsOfGreetings extends Component {
	render() {
		return (
			<View>
				<Greeting name='Smith'/>
				<Greeting name='Write'/>
				<Greeting name='Ben'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	greeting: {
		// alignItems：决定了子元素在次轴方向的排列顺序
		alignItems: 'center'
	}
});