/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppHomeScreen from './src/components/navigator/study/AppHomeScreen';
import AppHomeScreenParams from './src/components/navigator/study/AppHomeScreenParams';
import AppHomeScreenHeader from './src/components/navigator/study/AppHomeScreenHeader';
import AppModalScreen from './src/components/navigator/study/AppModalScreen';
import NavigatorIOSApp from './src/components/navigator/ios/NavigatorIOSApp';
import FetchTest from './src/components/network/FetchTest';
import HomeImageBackground from './src/components/images/HomeImageBackground';
import FadeInScreen from './src/components/animated/FadeInScreen';
import TimerScreen from './src/components/timer/TimerScreen';
import AppTabsScreen from './src/components/navigator/study/tab/AppTabsScreen';
import AppTabsScreenMore from './src/components/navigator/study/tab/AppTabsScreenMore';
import AppDrawerScreen from './src/components/navigator/study/drawer/AppDrawerScreen';

/**
 * redux相关
 */
import {
	Provider
} from 'react-redux';
import store from './src/redux/store/ConfigureStore';
import CountButton from './src/components/button/CountButton';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Provider store={store}>
				<CountButton/>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

/**
 * const instructions = Platform.select({
 * ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
 * android:
 *   'Double tap R on your keyboard to reload,\n' +
 *   'Shake or press menu button for dev menu',
 * });
 */
