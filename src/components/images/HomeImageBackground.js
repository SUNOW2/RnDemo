/**
 * 描述：
 * @ClassName HomeImageBackground
 * @Author 徐旭
 * @Date 2018/11/21 08:56
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ImageBackground
} from 'react-native';

export default class HomeImageBackground extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	componentDidMount() {
		this.setState({
			loading: true
		});
	}

	render() {
		if (this.state.loading) {
			return (
				<View style={styles.container}>
					<ImageBackground
						style={styles.image}
						source={{uri: "http://tupian.qqjay.com/u/2017/1118/1_162252_8.jpg" }}>
						<Text>我是背景上面的字</Text>
					</ImageBackground>
				</View>
			);
		}

		return (
			<View>
				<Text>我暂时没有背景</Text>
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
		width: '100%',
		height: ' 100%'
	}
});