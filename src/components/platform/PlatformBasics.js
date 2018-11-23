/**
 * 描述：
 * @ClassName PlatformBasics
 * @Author 徐旭
 * @Date 2018/11/18 13:48
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Platform,
	StyleSheet
} from 'react-native';

export default class PlatformBasics extends Component {
	render() {
		console.warn(Platform.Version);
		return (
			<View style={styles.container}>
				<Text>Hello World</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: Platform.OS === 'ios' ? 200 : 100,
		...Platform.select({
			ios: {
				backgroundColor: 'red'
			},
			android: {
				backgroundColor: 'blue'
			}
		})
	}
});