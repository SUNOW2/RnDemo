/**
 * Created by 徐旭 on 2018/11/15
 */

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class HomeImage extends Component {
	render() {
		let pic = {
			uri: "http://tupian.qqjay.com/u/2017/1118/1_162252_8.jpg"
		};

		return (
			<Image source={pic} style={styles.container}/>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: 193,
		height: 110
	},
});

/**
 * 为了使新的图片资源机制正常工作，require中的图片名字必须是一个静态字符串(不能使用变量，
 * 因为require是在编译器执行，而非运行期执行)
 *
 * // 正确写法
 * <Image source={require('./my-icon.png')} />
 * // 错误写法
 * var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive'
 * <Image source={require('./' + icon + '.png')} />
 *
 * // 正确写法
 * var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png')
 * <Image source={icon} />
 * 通过这种方式引用的图片资源包含图片的尺寸（宽度，高度）信息，如果需要动态缩放图片，可能需要手动在style属性中
 * 设置{width: null, height: null}
 *
 * 网络图片需要手动指定图片的尺寸
 */