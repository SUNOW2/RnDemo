/**
 * 描述：
 * @ClassName AppDrawerScreen
 * @Author 徐旭
 * @Date 2018/11/21 22:21
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Button,
	Image,
	StyleSheet
} from 'react-native';
import {
	createAppContainer,
	createDrawerNavigator
} from 'react-navigation'

class MyHomeScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({tintColor}) => (
			<Image
				source={{uri: "http://tupian.qqjay.com/u/2017/1118/1_162252_8.jpg"}}
				style={[styles.image, {tintColor: tintColor}]}/>
		)
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={() => this.props.navigation.navigate('Notifications')}
					title='Go to notifications'/>
			</View>
		);
	}
}

class MyNotificationsScreen extends Component {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: ({tintColor}) => (
			<Image
				source={{uri: "http://tupian.qqjay.com/u/2017/1118/1_162252_8.jpg"}}
				style={[styles.image, {tintColor: tintColor}]}/>
		)
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title='Go back home'/>
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
		width: 200,
		height: 200
	}
});

const MyDrawerNavigator = createDrawerNavigator({
	Home: MyHomeScreen,
	Notifications: MyNotificationsScreen
});

const MyDrawerContainer = createAppContainer(MyDrawerNavigator);

export default class AppDrawerScreen extends Component {
	render() {
		return (
			<MyDrawerContainer/>
		);
	}
}