/**
 * 描述：
 * @ClassName HomeScreen
 * @Author 徐旭
 * @Date 2018/11/18 21:05
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native';
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate("Details")}/>
			</View>
		);
	}
}

class DetailScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Details Screen</Text>
				<View style={styles.button}>
					<Button
						title="Go to Details... again"
						// onPress={() => this.props.navigation.push("AnotherDetailScreen")}
						onPress={() => this.props.navigation.push("Details")}/>
				</View>
				<View style={styles.button}>
					<Button
						title="Go to Home"
						onPress={() => this.props.navigation.navigate("Home")}/>
				</View>
				<View style={styles.button}>
					<Button
						title="Go back"
						onPress={() => this.props.navigation.goBack()}/>
				</View>
			</View>
		);
	}
}

class AnotherDetailScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Another Details Screen</Text>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Details: DetailScreen,
		AnotherDetailScreen: AnotherDetailScreen
	},
	{
		initialRouteName: "Home"
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		height: 30,
		width: 200,
		margin: 10
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default class AppHomeScreen extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}