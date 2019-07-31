import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
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
} from "native-base";

import styles from "./styles";
import imageBackground from "../../../images/40400324.jpg";
// const launchscreenBg = require('../../../images/40400324.jpg')

class Home extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<StatusBar barStyle="light-content" />
				<Header>
					<Body>
						<Title>Home</Title>
					</Body>
					<Button
						transparent
						onPress={() => this.props.navigation.navigate("Login")}
					>
						<Icon name="power" />
					</Button>
				</Header>
				<ImageBackground source={imageBackground} style={styles.logoContainer}>
					<Content padder>
						{/* <Button
							iconLeft
							onPress={() => this.props.navigation.navigate("Login")}
						>
							<Icon name="power" />
							<Text>Login</Text>
						</Button> */}
						{/* <Button onPress={() => this.onLogin()}>
							<Text>Sign up</Text>
						</Button> */}
					</Content>
				</ImageBackground>
			</Container>
		);
	}
}

export default Home;
