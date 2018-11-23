/**
 * 描述：
 * @ClassName AppTabsScreen
 * @Author 徐旭
 * @Date 2018/11/21 16:31
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
	createAppContainer
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home!</Text>
				<Button
					title="Go to Settings"
					onPress={() => this.props.navigation.navigate('Settings')}
				/>
			</View>
		);
	}
}

class SettingsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Settings!</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Settings: SettingsScreen
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`;
				} else if (routeName === 'Settings') {
					iconName = `ios-options${focused ? '' : '-outline'}`;
				}
				console.warn("navigation = " + navigation);
				return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		}
	}
);

TabContainer = createAppContainer(TabNavigator);

export default class AppTabsScreen extends Component {
	render() {
		return (
			<TabContainer/>
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