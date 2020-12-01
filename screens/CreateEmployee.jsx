import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const CreateEmployee = () => {
	const [ formValues, setFormValues ] = React.useState({ name: '', phoneNumber: '', email: '', salary: '' });
	const [ picture, setPicture ] = React.useState('');
	const [ modal, setModal ] = React.useState(false);
	return (
		<View style={styles.root}>
			<TextInput
				label="Name"
				value={formValues.name}
				style={styles.inputStyle}
				mode="outlined"
				theme={theme}
				onChangeText={(text) => setFormValues({ ...formValues, name: text })}
			/>
			<TextInput
				label="Email"
				value={formValues.email}
				style={styles.inputStyle}
				mode="outlined"
				theme={theme}
				onChangeText={(text) => setFormValues({ ...formValues, email: text })}
			/>
			<TextInput
				label="Phone Number"
				value={formValues.phoneNumber}
				style={styles.inputStyle}
				mode="outlined"
				theme={theme}
				onChangeText={(text) => setFormValues({ ...formValues, phoneNumber: text })}
			/>
			<TextInput
				label="Salary"
				value={formValues.salary}
				style={styles.inputStyle}
				mode="outlined"
				theme={theme}
				onChangeText={(text) => setFormValues({ ...formValues, salary: text })}
			/>
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
	inputStyle: {
		margin: 5
	}
});

export default CreateEmployee;
