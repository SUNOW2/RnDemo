/**
 * 描述：
 * @ClassName LotOfStyles
 * @Author 徐旭
 * @Date 2018/11/15 16:06
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import FlexStyles from './FlexStyles';

export default class LotOfStyles extends Component {
	render() {
		// 后声明的属性会覆盖先声明的同名属性
		return (
			<View>
				<Text style={styles.red}>just red</Text>
				<Text style={styles.bigBlue}>just bigBlue</Text>
				<Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
				<Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
				<FlexStyles/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30
	},
	red: {
		color: 'red'
	}
});