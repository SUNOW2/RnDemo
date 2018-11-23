/**
 * 描述：
 * @ClassName AppTabsScreenMore
 * @Author 徐旭
 * @Date 2018/11/21 21:22
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
	createBottomTabNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

class DetailsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Details!</Text>
			</View>
		);
	}
}

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					title="Go to Building"
					onPress={() => this.props.navigation.navigate('Building')}/>
			</View>
		);
	}
}

class SettingsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					title='Go to Home'
					onPress={() => this.props.navigation.navigate('Home')}/>
			</View>
		);
	}
}

class BuildingScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					title='Go to Details'
					onPress={() => this.props.navigation.navigate('Details')}/>
			</View>
		);
	}
}

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
	Details: DetailsScreen
});

const BuildingStack = createStackNavigator({
	Building: BuildingScreen,
	Details: DetailsScreen
});

const AppContainer = createAppContainer(createBottomTabNavigator(
	{
		Home: HomeStack,
		Building: BuildingStack,
		Settings: SettingsStack
	}
));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default class AppTabsScreenMore extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}



