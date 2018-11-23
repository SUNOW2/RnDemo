/**
 * 描述：
 * @ClassName FlatListBasics
 * @Author 徐旭
 * @Date 2018/11/16 11:11
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View
} from 'react-native';

/**
 * FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同
 * FlatList更适合长列表，且元素
 */
export default class FlatListBasics extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{key: 'Devin'},
						{key: 'Jackson'},
						{key: 'Joel'},
						{key: 'John'},
						{key: 'Jillian'},
						{key: 'Jimmy'},
						{key: 'Julie'}
					]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}>
				</FlatList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});