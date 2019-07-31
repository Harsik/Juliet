import React, { Component } from 'react'
import { StyleProvider } from 'native-base'

import App from '../App'
import getTheme from '../theme/components'
import variables from '../theme/variables/commonColor'

export default class Setup extends Component {
	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		})
		this.setState({ isReady: true })
	}

	render() {
		return (
			<StyleProvider style={getTheme(variables)}>
				<App />
			</StyleProvider>
		)
	}
}
