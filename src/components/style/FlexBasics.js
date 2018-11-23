/**
 * 描述：
 * @ClassName FlexBasics
 * @Author 徐旭
 * @Date 2018/11/15 16:51
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

/**
 * 注意，所有的最外层View应该加上style，比如<View style={styles.content}>
 */
export default class FlexBasics extends Component {
	render() {
		return (
			<View style={styles.alignItems}>
				{/*<FlexDirectionBasics/>*/}
				{/*<JustifyContentBasics/>*/}
				<AlignItemsBasics/>
			</View>
		);
	}
}

/**
 * flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，
 * 还是沿着竖直轴排列(column)
 */
class FlexDirectionBasics extends Component {
	render() {
		return (
			<View style={styles.direction}>
				<View style={styles.directionFirst}/>
				<View style={styles.directionSecond}/>
				<View style={styles.directionThird}/>
			</View>
		);
	}
}

/**
 * justifyContent可以决定其子元素沿着主轴的排列方式。
 */
class JustifyContentBasics extends Component {
	render() {
		return (
			<View style={styles.content}>
				<View style={styles.contentFirst}/>
				<View style={styles.contentSecond}/>
				<View style={styles.contentThird}/>
			</View>
		);
	}
}

/**
 * alignItems可以决定其子元素沿着次轴的排序方式
 */
class AlignItemsBasics extends Component {
	render() {
		return (
			<View style={styles.alignItems}>
				<View style={styles.alignItemsFirst}/>
				<View style={styles.alignItemsSecond}/>
				<View style={styles.alignItemsThird}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	direction: {
		flex: 1,
		flexDirection: 'row'
	},
	directionFirst: {
		width: 50,
		height: 50,
		backgroundColor: 'powderblue'
	},
	directionSecond: {
		width: 50,
		height: 50,
		backgroundColor: 'skyblue'
	},
	directionThird: {
		width: 50,
		height: 50,
		backgroundColor: 'steelblue'
	},
	content: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	contentFirst: {
		width: 50,
		height: 50,
		backgroundColor: 'powderblue'
	},
	contentSecond: {
		width: 50,
		height: 50,
		backgroundColor: 'skyblue'
	},
	contentThird: {
		width: 50,
		height: 50,
		backgroundColor: 'steelblue'
	},
	alignItems: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	alignItemsFirst: {
		width: 50,
		height: 50,
		backgroundColor: 'powderblue'
	},
	alignItemsSecond: {
		height: 50,
		backgroundColor: 'skyblue'
	},
	alignItemsThird: {
		height: 100,
		backgroundColor: 'steelblue'
	}
});