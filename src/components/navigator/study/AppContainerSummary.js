/**
 * 描述：
 * @ClassName AppContainerSummary
 * @Author 徐旭
 * @Date 2018/11/19 17:26
 * @Version 1.0
 */
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

class App extends Component {
	someEvent() {
		this.navigator &&
			this.navigator.dispatch(
				NavigationActions.navigate({
					routeName: someRouteName
				})
			);
	}
}

const AppNavigator = createStackNavigator({});

const AppContainer = createAppContainer(AppNavigator);

export default class AppContainerSummary extends Component {
	render() {
		return (
			<AppContainer
				onNavigationStateChathinge={handlerNavigationChange}
				uriPrefix="/app"
				ref = {
					nav => {
						this.navigator = nav
					}
				}
			/>
		);
	}
}
