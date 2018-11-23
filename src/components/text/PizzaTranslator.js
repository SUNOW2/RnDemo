/**
 * 描述：
 * @ClassName PizzaTranslator
 * @Author 徐旭
 * @Date 2018/11/15 23:03
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

/**
 * TextInput是一个允许用户输入文本的基础组件。它有一个onChangeText的属性，
 * 此属性接受一个函数，该函数会在文本变化时被调用。另外一个名为onSubmitEditing的
 * 属性，会在文本被提交后调用。
 */
export default class PizzaTranslator extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={styles.viewFirst}>
				<TextInput
					style={styles.textFirst}
					placeholder="Type here to translate"
					onChangeText={text => this.setState({text})}/>
				<Text style={styles.textSecond}>
					{this.state.text.split(' ')
						.map(word => word && '🍕')
						.join(' ')}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewFirst: {
		padding: 40
	},
	textFirst: {
		height: 40
	},
	textSecond: {
		padding: 10,
		fontSize: 42
	}
});