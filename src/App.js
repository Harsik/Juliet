import React from 'react'
import { Root } from 'native-base'
import {
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer
} from 'react-navigation'

import Home from './components/home'
import SideBar from './components/sidebar'
import Login from './components/login'
import Main from './components/main'

const Drawer = createDrawerNavigator(
	{
		Home: { screen: Home },
		Main: { screen: Main }
	},
	{
		initialRouteName: 'Home',
		contentOptions: {
			// activeTintColor: '#e91e63'
		},
		contentComponent: props => <SideBar {...props} />
	}
)

const AppNavigator = createStackNavigator(
	{
		Drawer: { screen: Drawer },
		Login: { screen: Login }
	},
	{
		initialRouteName: 'Drawer',
		headerMode: 'none'
	}
)

const AppContainer = createAppContainer(AppNavigator)

export default () =>
	<Root>
		<AppContainer />
	</Root>
