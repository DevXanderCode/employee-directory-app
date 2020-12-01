import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const Home = () => {
	const data = [
		{ id: 1, name: 'Mukesh', position: 'Web Dev' },
		{ id: 2, name: 'Suresh', position: 'Andriod Dev' },
		{ id: 3, name: 'Ramesh', position: 'ML Expert' },
		{ id: 4, name: 'Hitesh', position: 'cloud Expert' }
	];

	const renderData = ({ name, id, position, ...props }) => (
		<Card style={styles.myCard} key={id}>
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
		<View>
			<FlatList data={data} renderItem={({ item }) => renderData(item)} />
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
		// marginLeft: 10
	}
});

export default Home;
