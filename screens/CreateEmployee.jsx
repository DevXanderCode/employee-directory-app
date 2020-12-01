import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const CreateEmployee = () => {
	const [ formValues, setFormValues ] = React.useState({ name: '', phoneNumber: '', email: '', salary: '' });
	const [ picture, setPicture ] = React.useState('');
	const [ modal, setModal ] = React.useState(false);
	return (
		<View style={styles.root}>
			<Text>hello from the CreateEmployee component</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1
	}
});

export default CreateEmployee;
