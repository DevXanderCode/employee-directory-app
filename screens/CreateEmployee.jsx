import * as React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
// import Constants from "expo-constants";
import * as Permissions from 'expo-permissions';

const CreateEmployee = () => {
	const [ formValues, setFormValues ] = React.useState({ name: '', phoneNumber: '', email: '', salary: '' });
	const [ picture, setPicture ] = React.useState('');
	const [ modalVisible, setModalVisible ] = React.useState(false);

	const pickImageFromGallery = async () => {
		const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (granted) {
			let data = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [ 1, 1 ],
				quality: 0.5
			});
			console.log('Logging Data', data);
		} else {
			alert('Sorry, we need camera roll permissions to make this work!');
		}
	};

	const pickImageFromCamera = async () => {
		const { granted } = await Permissions.askAsync(Permissions.CAMERA);
		if (granted) {
			let data = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [ 1, 1 ],
				quality: 0.5
			});
		} else {
			alert('Sorry, we need camera roll permissions to make this work!');
		}
	};

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
				keyboardType="number-pad"
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
			<Button
				mode="contained"
				style={styles.inputStyle}
				theme={theme}
				icon="upload"
				onPress={() => setModalVisible(true)}
			>
				Upload image
			</Button>
			<Button
				mode="contained"
				style={styles.inputStyle}
				theme={theme}
				icon="content-save"
				onPress={() => console.log('Saving')}
			>
				Save
			</Button>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}
			>
				<View style={styles.modalView}>
					<View style={styles.modalButtonView}>
						<Button mode="contained" icon="camera" theme={theme} onPress={() => pickImageFromCamera()}>
							Camera
						</Button>
						<Button mode="contained" theme={theme} icon="image" onPress={() => pickImageFromGallery()}>
							Gallary
						</Button>
					</View>
					<Button theme={theme} onPress={() => setModalVisible(false)}>
						Cancel
					</Button>
				</View>
			</Modal>
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
	},
	modalView: {
		position: 'absolute',
		bottom: 2,
		width: '100%',
		backgroundColor: '#fff'
	},
	modalButtonView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
});

export default CreateEmployee;
