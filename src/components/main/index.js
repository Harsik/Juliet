import React, { Component } from 'react'
import { ImageBackground, View, StatusBar } from 'react-native'
import {
	Container,
	Button,
	H3,
	Text,
	Title,
	Content,
	Header,
	Left,
	Right,
	Body,
	Icon
} from 'native-base'

import styles from './styles'

class main extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}
						>
							<Icon name="ios-menu" />
						</Button>
					</Left>
					<Body>
						<Title>UnderSeed</Title>
					</Body>
					<Right>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('Login')}
						>
							<Icon name="power" />
						</Button>
					</Right>
				</Header>

				<Content padder>
					<H3>Hello Main!</H3>
				</Content>
			</Container>
		)
	}
}

export default main
