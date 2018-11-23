/**
 * 描述：
 * @ClassName Hello
 * @Author 徐旭
 * @Date 2018/11/21 11:31
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class TimerScreen extends Component {
	componentDidMount() {
		this.timer = setTimeout(() => {
			console.warn("定时器");
		}, 500);
	}

	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello World</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});