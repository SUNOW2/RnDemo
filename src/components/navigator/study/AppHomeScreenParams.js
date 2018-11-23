/**
 * 描述：
 * @ClassName HomeScreenParams
 * @Author 徐旭
 * @Date 2018/11/19 09:08
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
} from 'react-native';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';

class HomeScreenParams extends Component {
	/* 设置导航栏的头部名称，此处的设置只针对HomeScreenParams组件 */
	static navigationOptions = {
		title: 'Home',
		/* 设置导航栏的头部名称的样式 */
		// headerStyle: {
		// 	backgroundColor: "#f4511e",
		// },
		// headerTintColor: "#fff",
		// headerTitleStyle: {
		// 	fontWeight: "bold"
		// }
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Home Screen</Text>
				<View style={styles.button}>
					<Button
						title="Go to Details"
						/* 导航到"Details"栏，并携带相关参数 */
						onPress={() => {
							this.props.navigation.navigate("Details", {
								itemId: 86,
								otherParam: "anything you want here"
							});
						}}/>
				</View>
			</View>
		);
	}
}

class DetailsScreen extends Component {
	/* 根据navigation参数设置导航栏的头部名称 */
	static navigationOptions = ({navigation}) => {
		return {
			title: navigation.getParam("otherParam", "A Nested Details Screen")
		};
	};

	render() {
		/* 获取参数，如果不存在参数，则提供默认值 */
		const {navigation} = this.props;
		const itemId = navigation.getParam("itemId", "NO-ID");
		const otherParam = navigation.getParam("otherParam", "some default value");

		return (
			<View style={styles.container}>
				<Text>Details Screen</Text>
				<Text>itemId: {JSON.stringify(itemId)}</Text>
				<Text>otherParam: {JSON.stringify(otherParam)}</Text>
				<View style={styles.button}>
					<Button
						title="Go to Details... again"
						onPress={() => {
							this.props.navigation.push("Details", {
								itemId: Math.floor(Math.random() * 100)
							})
						}}/>
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
				{/* 通过setParams()方法更新navigationOptions变量，从而更新导航栏的头部名称 */}
				<View style={styles.button}>
					<Button
						title="Update the title"
						onPress={() => this.props.navigation.setParams({otherParam: "Updated!"})}/>
				</View>
				<View style={styles.button}>
					<Button
						title="logo title"
						onPress={() => this.props.navigation.navigate("LogoTitle")}/>
				</View>
			</View>
		);
	}
}

class LogoTitle extends Component {
	render() {
		return (
			<Image
				source={require("./logo.jpg")}
				style={styles.image}/>
		);
	}
}

class LogoTitleScreen extends Component {
	static navigationOptions = {
		headerTitle: <LogoTitle/>
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>logo title</Text>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: HomeScreenParams,
		Details: DetailsScreen,
		LogoTitle: LogoTitleScreen
	},
	{
		initialRouteName: 'Home',
		/* 设置导航栏头部名称的样式，此处的设置针对AppNavigator中声明的所有组件 */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			},
		},
		navigationOptions: {
			tabBarLabel: 'AppNavigator!',

		}
	}
);

const AppTabs = createBottomTabNavigator({AppNavigator});

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
	},
	image: {
		width: 30,
		height: 30
	}
});

const AppContainerParams = createAppContainer(AppNavigator);
const AppTabsContainer = createAppContainer(AppTabs);

export default class AppHomeScreenParams extends Component {
	render() {
		return (
			/*<AppContainerParams/>*/
			<AppTabsContainer/>
		);
	}
}