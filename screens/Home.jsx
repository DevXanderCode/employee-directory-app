import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation, ...props }) => {
	const data = [
		{ id: 1, name: 'Mukesh', position: 'Web Dev' },
		{ id: 2, name: 'Suresh', position: 'Andriod Dev' },
		{ id: 3, name: 'Ramesh', position: 'ML Expert' },
		{ id: 4, name: 'Hitesh', position: 'Cloud Expert' }
		// { id: 5, name: 'Mukesh', position: 'Web Dev' },
		// { id: 6, name: 'Suresh', position: 'Andriod Dev' },
		// { id: 7, name: 'Ramesh', position: 'ML Expert' },
		// { id: 8, name: 'Hitesh', position: 'Cloud Expert' },
		// { id: 9, name: 'Mukesh', position: 'Web Dev' },
		// { id: 10, name: 'Suresh', position: 'Andriod Dev' },
		// { id: 11, name: 'Ramesh', position: 'ML Expert' },
		// { id: 12, name: 'Hitesh', position: 'Cloud Expert' }
	];

	const renderData = ({ name, id, position, ...props }) => (
		<Card style={styles.myCard} onPress={() => navigation.navigate('Profile')}>
			<View style={styles.cardView}>
				<Image
					source={{
						uri:
							'https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1442&q=80'
					}}
					style={{ width: 60, height: 60, borderRadius: 30 }}
				/>
				<View style={{ marginLeft: 10, alignContent: 'center' }}>
					<Text style={styles.text}>{name}</Text>
					<Text style={styles.text}>{position}</Text>
				</View>
			</View>
		</Card>
	);
	return (
		<View style={{ flex: 1 }}>
			<FlatList data={data} renderItem={({ item }) => renderData(item)} keyExtractor={(item) => `${item.id}`} />
			<FAB
				style={styles.fab}
				theme={{ colors: { accent: '#006aff' } }}
				icon="plus"
				onPress={() => navigation.navigate('Create')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	myCard: {
		margin: 5
	},
	cardView: {
		flexDirection: 'row',
		padding: 6
	},
	text: {
		fontSize: 20
	},
	fab: {
		position: 'absolute',
		margin: 16,
		bottom: 0,
		right: 0
	}
});

export default Home;
