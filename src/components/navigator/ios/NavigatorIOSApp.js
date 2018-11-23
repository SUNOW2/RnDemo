/**
 * 描述：
 * @ClassName NavigatorIOSApp
 * @Author 徐旭
 * @Date 2018/11/20 08:40
 * @Version 1.0
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	NavigatorIOS,
	Text,
	View,
	StyleSheet
} from 'react-native';

class MyScreen extends Component {
	static propTypes = {
		route: PropTypes.shape({
			title: PropTypes.string.isRequired
		}),
		navigator: PropTypes.object.isRequired
	};

	constructor(props, context) {
		super(props, context);
		this._onForward = this._onForward.bind(this);
	}

	_onForward() {
		let nextIndex = ++this.props.index;
		this.props.navigator.push({
			component: MyScreen,
			title: 'Screen ' + nextIndex,
			passProps: {index: nextIndex}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Current Screen: {this.props.title}</Text>
				<Button
					onPress={this._onForward}
					title="Tap me to load the next screen"/>
			</View>
		);
	}
}

export default class NavigatorIOSApp extends Component {
	render() {
		return (
			<NavigatorIOS
				initialRoute={{
					component: MyScreen,
					title: "My initial Screen",
					passProps: {index: 1}
				}}
				style={styles.navigator}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	navigator: {
		flex: 1
	}
});