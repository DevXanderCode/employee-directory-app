import * as React from 'react';
import { StyleSheet, View, Text, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = () => {
	const openDial = (tel) => {
		Platform.OS === 'android' ? Linking.openURL(`tel:${tel}`) : Linking(`telprompt: ${tel}`);
	};
	return (
		<View style={styles.root}>
			<LinearGradient colors={[ '#0033ff', '#6bc1ff' ]} style={{ height: '20%' }} />
			<View
				style={{
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
			<View style={{ alignItems: 'center', margin: 15 }}>
				<Title>Nweke chinedu Alex</Title>
				<Text style={{ fontSize: 18 }}>Developer</Text>
			</View>
			<Card
				style={styles.myCard}
				onPress={() => {
					Linking.openURL('mailto:nwekealexchinedu@gmail.com');
				}}
			>
				<View style={styles.cardContent}>
					<MaterialIcons name="email" size={32} color="#006aff" />
					<Text style={styles.myText}>nwekealexchinedu@gmail.com</Text>
				</View>
			</Card>
			<Card style={styles.myCard} onPress={() => openDial(1234567890)}>
				<View style={styles.cardContent}>
					<Entypo name="phone" size={32} color="#006aff" />
					<Text style={styles.myText}>1234567890</Text>
				</View>
			</Card>
			<Card style={styles.myCard}>
				<View style={styles.cardContent}>
					<MaterialIcons name="attach-money" size={32} color="#006aff" />
					<Text style={styles.myText}>180k USD</Text>
				</View>
			</Card>
			<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
				<Button
					icon="account-edit"
					theme={theme}
					mode="contained"
					onPress={() => console.log('edit button pressed')}
				>
					Edit
				</Button>
				<Button
					icon="delete"
					mode="contained"
					theme={theme}
					onPress={() => console.log('fire button presssed')}
				>
					Fire Employee
				</Button>
			</View>
		</View>
	);
};

const theme = {
	colors: {
		primary: '#006aff'
	}
};

const styles = StyleSheet.create({
	root: {
		flex: 1
	},
	myCard: {
		margin: 3
	},
	cardContent: {
		flexDirection: 'row',
		padding: 10
	},
	myText: {
		fontSize: 18,
		marginLeft: 7,
		marginTop: 3
	}
});
export default Profile;
