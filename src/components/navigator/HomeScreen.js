/**
 * 描述：
 * @ClassName HomeScreen
 * @Author 徐旭
 * @Date 2018/11/18 14:59
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	Button
} from 'react-native';
import {
	createStackNavigator
} from 'react-navigation';

const App = createStackNavigator({
	Home: {screen: HomeScreen}
});


class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome'
	};

	render() {
		const {navigate} = this.props.navigation;
		return (
			<Button
				title="Go to Jane's profile"
				onPress={() => {
					navigate('Profile', {name: 'Jane'})
				}}
			/>
		);
	}
}

export default App;