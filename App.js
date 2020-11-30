import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Hello Bro Chima, I'm testing expo</Text>
			<Home />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: Constants.statusBarHeight,
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
