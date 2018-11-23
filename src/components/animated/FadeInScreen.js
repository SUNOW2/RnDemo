/**
 * 描述：
 * @ClassName fadeInView
 * @Author 徐旭
 * @Date 2018/11/21 10:47
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	Animated,
	Text,
	View,
	StyleSheet
} from 'react-native';

class FadeInView extends Component {
	state = {
		fadeAnim: new Animated.Value(0)
	};

	componentDidMount() {
		Animated.timing(               // 随时间变化而执行动画
			this.state.fadeAnim,    // 动画中的变量值
			{
				toValue: 1,                // 透明度最终变为1，即完全不透明
				duration: 10000            // 让动画持续一段时间
			}
		).start();                     // 开始执行动画
	}

	render() {
		let {fadeAnim} = this.state;

		return (
			<Animated.View              // 使用专门的可动画化的View组件
				style={{
					...this.props.style,
					opacity: fadeAnim       // 将透明度指定为动画变量值
				}}>
				{this.props.children}
			</Animated.View>
		);
	}
}

export default class FadeInScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FadeInView style={styles.fadeInView}>
					<Text style={styles.text}>Fade in</Text>
				</FadeInView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	fadeInView: {
		width: 250,
		height: 250,
		backgroundColor: 'powderblue'
	},
	text: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10
	}
});