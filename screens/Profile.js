import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

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
				<Text style={styles.myText}>Developer</Text>
			</View>
			<Card style={styles.myCard}>
				<View style={styles.cardContent}>
					<MaterialIcons name="email" size={32} color="#006aff" />
					<Text style={styles.myText}>nwekealexchinedu@gmail.com</Text>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1
	},
	myCard: {
		margin: 3
	},
	cardContent: {
		flexDirection: 'row'
	},
	myText: {
		fontSize: 18
	}
});
export default Profile;
