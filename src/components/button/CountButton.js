/**
 * 描述：
 * @ClassName CountButton
 * @Author 徐旭
 * @Date 2018/11/22 15:39
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {
	getClassifies
} from '../../redux/actions/CountAction';

class CountButton extends Component {

	constructor(props) {
		super(props);
	}

	_onPressDec() {
		this.props.dispatch(getClassifies());
	}

	render() {
		const {msg, data} = this.props.countReducer.data;

		return (
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Button
						title='decrement'
						onPress={() => this._onPressDec()}/>
				</View>
				<Text>{msg}</Text>
				<FlatList
					data={data}
					renderItem={({item}) => <Text style={styles.item}>{item.id} {item.phone}</Text>}
					keyExtractor={(item) => item.id.toString()}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		margin: 10
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});

const mapStateToProps = state => {
	const {countReducer} = state;
	return {
		countReducer
	};
};

// 连接React组件与Redux store
export default connect(mapStateToProps)(CountButton);