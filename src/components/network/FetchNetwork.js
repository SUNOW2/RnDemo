/**
 * 描述：
 * @ClassName network
 * @Author 徐旭
 * @Date 2018/11/16 22:42
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Button,
	StyleSheet
} from 'react-native';

export default class FetchNetwork extends Component {
	fetchNow() {
		return fetch("http://mywebsite.com/endpoint", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstParam: "yourValue",
				secondParam: "yourOtherValue"
			})
		});
	}

	getMoviesFromApiAsync() {
		return fetch("https://facebook.github.io/react-native/movies.json")
			.then(response => response.json())
			.then(responseJson => {
				console.warn(JSON.stringify(responseJson));
				return responseJson.movies;
			})
			.catch(error => {
				console.error(error)
			})
	}

	async getMoviesFromApi() {
		try {
			// 注意：这里的await语句，其所在的函数必须有async关键字声明
			let response = await fetch(
				"https://facebook.github.io/react-native/movies.json"
			);
			let responseJson = await response.json();

			console.warn(JSON.stringify(responseJson.movies));
			return responseJson.movies;
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					title="测试fetch"
					onPress={this.getMoviesFromApi}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	}
});