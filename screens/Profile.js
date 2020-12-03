import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
	return (
		<View style={styles.root}>
			<LinearGradient colors={[ '#0033ff', '#6bc1ff' ]} style={{ height: '20%' }} />
			<Text>Hello from the profile component</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
});
export default Profile;
