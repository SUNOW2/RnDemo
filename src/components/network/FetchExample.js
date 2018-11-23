/**
 * 描述：
 * @ClassName FetchExample
 * @Author 徐旭
 * @Date 2018/11/18 13:03
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	FlatList,
	ActivityIndicator,
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class FetchExample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		return fetch("https://facebook.github.io/react-native/movies.json")
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					isLoading: false,
					dataSource: responseJson.movies
				}, function () {
					console.warn(JSON.stringify(responseJson.movies));
				})
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator/>
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
					keyExtractor={(item, index) => item.id}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	}
});