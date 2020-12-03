import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

function App(props) {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						title: 'Home Screen',
						headerTintColor: '#fff',
						headerStyle: {
							backgroundColor: '#006aff'
						}
					}}
				/>
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Create" component={CreateEmployee} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</View>
	);
}

export default () => {
	return (
		<NavigationContainer>
			<App />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebebeb'
		// marginTop: Constants.statusBarHeight
	}
});
