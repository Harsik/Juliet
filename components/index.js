import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-elements'

function MyComponent(props) {
	const { theme, updateTheme } = props
	return <Text style={{ color: theme.colors.primary }}>Yo!</Text>
}

export default withTheme(MyComponent)
