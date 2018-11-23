/**
 * 描述：
 * @ClassName FlexStyles
 * @Author 徐旭
 * @Date 2018/11/15 16:39
 * @Version 1.0
 */
import React, {Component} from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

export default class FlexStyles extends Component {
	render() {
		return (
			<View>
				{/*指定宽高*/}
				<View style={styles.appointSize}/>

				{/*flex，弹性宽高。组件能够撑满空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，*/}
				{/*也没有设定flex，则父容器的尺寸为零，其子组件如果使用了flex，也是无法显示的*/}
				<View style={styles.fatherFlexSize}>
					<View style={styles.sonFlexSize}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	appointSize: {
		width: 50,
		height: 50,
		backgroundColor: 'skyblue'
	},
	fatherFlexSize: {
		flex: 1
	},
	sonFlexSize: {
		flex: 3,
		backgroundColor: 'steelblue'
	}
});