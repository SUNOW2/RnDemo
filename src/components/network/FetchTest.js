/**
 * 描述：
 * @ClassName FetchTest
 * @Author 徐旭
 * @Date 2018/11/20 10:08
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet
} from 'react-native';

export default class FetchTest extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: ''
		}
	}

	componentWillMount() {
		fetch("http://localhost:9002/classify", {
			method: 'GET',
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					data: responseJson.data
				}, function () {
					// console.warn(this.state.data);
				});
			})
			.catch(error => {
				console.error(error);
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					dataSource={this.state.data}
					renderItem={({item}) => console.warn(item)}
					keyExtractor={(item) => item.id}/>
			</View>
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