import React, { Component } from 'react'
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Footer,
	FooterTab,
	Left,
	Right,
	Body,
	Form,
	Item,
	Input,
	Label
} from 'native-base'

import styles from './styles'
import { login } from '../../APIUtils/index'
import { authorize } from 'react-native-app-auth'

// base config
const config = {
	issuer: ' https://accounts.google.com',
	clientId:
		'82191215726-qpp3gi2n563rth1o37o4vgjchlag2da9.apps.googleusercontent.com',
	redirectUrl: 'io.identityserver.demo:/oauthredirect',
	scopes: ['https://www.googleapis.com/auth/calendar.readonly']
}

export default class Login extends Component {
	constructor(props) {
		// data()
		super(props)
		this.state = {
			email: '',
			password: '',
			isLoading: false
		}
	}

	onLogin() {
		this.setState({ isLoading: true })
		localStorage.email = this.state.email
		// use the client to make the auth request and receive the authState
		try {
			const result = await authorize(config)
			// result includes accessToken, accessTokenExpirationDate and refreshToken
			console.log(result)
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Login</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Form>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								name="email"
								onChange={e => this.setState({ email: e.target.value })}
							/>
						</Item>
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input
								name="password"
								secureTextEntry={true}
								onBlur={e => this.setState({ password: e.target.value })}
							/>
						</Item>
					</Form>
					<Button block onPress={() => this.onLogin()}>
						<Text>Login</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
