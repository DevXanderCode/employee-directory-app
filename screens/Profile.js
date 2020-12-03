import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title } from 'react-native-paper';

const Profile = () => {
	return (
		<View style={styles.root}>
			<LinearGradient colors={[ '#0033ff', '#6bc1ff' ]} style={{ height: '20%' }} />
			<View
				style={{
					// flexDirection: 'row',
					alignItems: 'center',
					marginTop: -70
				}}
			>
				<Image
					source={{
						uri:
							'https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
					}}
					style={{
						width: 140,
						height: 140,
						borderRadius: 70
					}}
				/>
			</View>
			<View style={{ alignItems: 'center' }}>
				<Title>Nweke chinedu Alex</Title>
				<Text style={{ fontSize: 18 }}>Developer</Text>
			</View>
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
