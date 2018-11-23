/**
 * 描述：
 * @ClassName AppModalScreen
 * @Author 徐旭
 * @Date 2018/11/19 19:27
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

/* 创建一个模态 */
class HomeScreen extends Component {
	static navigationOptions = ({navigation}) => {
		const params = navigation.state.params || {};
		console.warn(navigation.state.params);

		return {
			headerTitle: "Home",
			headerLeft: (
				<Button
					onPress={() => navigation.navigate("MyModal")}
					title="Info"
					style={styles.style}
				/>
			)
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
			</View>
		);
	}
}

class ModalScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>This is a modal!</Text>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="Dismiss"/>
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

const MainStack = createStackNavigator({
	Home: HomeScreen,
	Details: DetailsScreen
});

const RootStack = createStackNavigator(
	{
		Main: MainStack,
		MyModal: ModalScreen
	},
	{
		modal: 'modal',
		headerMode: 'none'
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		color: "#fff"
	},
	text: {
		fontSize: 30
	}
});

const AppRootStack = createAppContainer(RootStack);

export default class AppModalScreen extends Component {
	render() {
		return (
			<AppRootStack/>
		);
	}
}