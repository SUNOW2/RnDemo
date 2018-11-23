/**
 * 描述：
 * @ClassName AppHomeScreenHeader
 * @Author 徐旭
 * @Date 2018/11/19 13:46
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	Button,
	StyleSheet
} from 'react-native';
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

class LogoTitle extends Component {
	render() {
		return (
			<Image
				source={require("./logo.jpg")}
				style={styles.image}/>
		);
	}
}

class HomeScreen extends Component {
	static navigationOptions = {
		headerTitle: <LogoTitle/>,
		/* 在导航栏右上角添加一个按钮 */
		headerRight: (
			<Button
				onPress={() => Alert.alert("This is a button!")}
				title="Info"
			/>
		)
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello World!</Text>
				<Button
					title="Go to Details"
					onPress={() => this.props.navigation.navigate("Details")}></Button>
			</View>
		);
	}
}

class DetailsScreen extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: <LogoTitle/>,
			headerRight: (
				<Button
					onPress={navigation.getParam("increaseCount")}
					title="+1"
					style={styles.image}
				/>
			)
		};
	};

	componentDidMount() {
		this.props.navigation.setParams({
			increaseCount: this._increaseCount
		});
	}

	state = {
		count: 0
	};

	_increaseCount = () => {
		this.setState({
			count: this.state.count + 1
		});

		console.warn("count = " + this.state.count);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Hello Details</Text>
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
	image: {
		height: 30,
		width: 30
	},
	button: {
		color: "skyblue"
	}
});

const AppNavigator = createStackNavigator({
	Home: HomeScreen,
	Details: DetailsScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class AppHomeScreenHeader extends Component {
	render() {
		return (
			<AppContainer/>
		);
	}
}