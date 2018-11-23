/**
 * 描述：
 * @ClassName Touchables
 * @Author 徐旭
 * @Date 2018/11/16 09:41
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	Alert,
	Platform,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	View
} from 'react-native';
/**
 * TouchableHighlight:在用户手指按下时变暗
 * TouchableNativeFeedback:在用户按下时形成类似水墨涟漪的效果
 * TouchableOpacity会在用户手指按下时降低按钮的透明度，而不会改变背景的颜色
 * TouchableWithoutFeedback会在用户点击事件的同时不显示任何的视觉反馈
 */
export default class Touchables extends Component {
	_onPressButton() {
		Alert.alert('You touch the button');
	}

	_onLongPressButton() {
		Alert.alert('You long-pressed the button');
	}

	render() {
		return (
			<View style={styles.container}>
				{/* underlayColor：有触摸操作时显示出来的颜色 */}
				<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableHighlight</Text>
					</View>
				</TouchableHighlight>
				<TouchableOpacity onPress={this._onPressButton}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableOpacity</Text>
					</View>
				</TouchableOpacity>
				<TouchableNativeFeedback
					onPress={this._onPressButton}
					background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableNativeFeedback</Text>
					</View>
				</TouchableNativeFeedback>
				<TouchableWithoutFeedback onPress={this._onPressButton}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
					</View>
				</TouchableWithoutFeedback>
				<TouchableHighlight
					onPress={this._onPressButton}
					onLongPress={this._onLongPressButton}
					underlayColor="white">
					<View style={styles.button}>
						<Text style={styles.buttonText}>Touchable with Long Press</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 60,
		// 子元素沿着次轴的排列顺序
		alignItems: 'center'
	},
	button: {
		marginBottom: 30,
		width: 260,
		alignItems: 'center',
		backgroundColor: '#2196F3'
	},
	buttonText: {
		// 设置内边距
		padding: 20,
		color: 'white'
	}
});