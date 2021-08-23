import * as React from 'react';
import { StyleSheet, View, Text, Modal, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
// import Constants from "expo-constants";
import * as Permissions from 'expo-permissions';

const CreateEmployee = ({ navigation, route }) => {
  if (route?.params) {
    console.log('edit mode for: ', route?.params);
  }
  const getDetails = (type) => {
    if (route.params) {
      const { _id, name, email, phone, salary, position, picture } = route.params;
      switch (type) {
        case 'name':
          return name;
        case 'email':
          return email;
        case 'phone':
          return phone;
        case 'salary':
          return salary;
        case 'position':
          return position;
        case 'picture':
          return picture;
      }
    }
    return '';
  };
  const [formValues, setFormValues] = React.useState({
    name: getDetails('name'),
    phone: getDetails('phone'),
    email: getDetails('email'),
    salary: getDetails('salary'),
    position: getDetails('position'),
  });
  const [picture, setPicture] = React.useState(getDetails('picture'));
  const [modalVisible, setModalVisible] = React.useState(false);
  const [enableShift, setEnableShift] = React.useState(false);

  const submitForm = () => {
    fetch('http://10.0.2.2:8080/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formValues, picture }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Logging the submit res', data);
        Alert.alert(`${data.name} is Saved Successfully`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log('i got this error when i submitted the form', err);
        Alert.alert('Something went wrong on form submittion, try again');
      });
  };

  const updateDetails = () => {
    fetch('http://10.0.2.2:8080/update', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formValues, picture, id: route?.params?._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Logging the submit res', data);
        Alert.alert(`${data.name} is Updated Successfully`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log('i got this error when i submitted the form', err);
        Alert.alert('Something went wrong while updating employee,please try again');
      });
  };

  const pickImageFromGallery = async () => {
    // const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status === 'granted') {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log('Logging Data after change the way i asked for permission', data);
      if (!data.cancelled) {
        let splitStr = data.uri.split('.');
        const newImageUri = 'file:///' + data.uri.split('file:/').join('');
        let newFile = {
          uri: newImageUri,
          type: mime.getType(newImageUri),
          name: newImageUri.split('/').pop(),
        };
        // console.log('Logging new File', newFile);
        handleUpload(newFile);
      }
    } else {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  const pickImageFromCamera = async () => {
    // const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status === 'granted') {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      // console.log(
      //   'logging data of the camera roll after changing the way i asked for permission ',
      //   data
      // );
      if (!data.cancelled) {
        const newImageUri = 'file:///' + data.uri.split('file:/').join('');
        let newFile = {
          uri: newImageUri,
          type: mime.getType(newImageUri),
          name: newImageUri.split('/').pop(),
        };

        handleUpload(newFile);
        // handleUpload(data);
      }
    } else {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  const handleUpload = (image) => {
    // let base64Img = `data:image/jpg;base64,${image.base64}`;
    const data = new FormData();
    data.append('file', image);
    // data.append('api_key', process.env.API_key);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'chinedu');

    fetch('https://api.cloudinary.com/v1_1/chinedu/image/upload', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(async (res) => {
        let data = await res.json();
        // console.log('logging data after upload', data);
        setPicture(data?.secure_url);
        setModalVisible(false);
        return data.secure_url;
      })
      // .then((data) => console.log('logging data in then', data))
      .catch((err) => {
        console.log('I got this error when i tried to upload to cloudinary', err);
        Alert.alert('Something went wrong while uploading image, try again');
      });
  };

  return (
    <KeyboardAvoidingView behavior='position' style={styles.root} enabled={enableShift}>
      <View>
        <TextInput
          label='Name'
          value={formValues.name}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          mode='outlined'
          theme={theme}
          onChangeText={(text) => setFormValues({ ...formValues, name: text })}
        />
        <TextInput
          label='Email'
          value={formValues.email}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          mode='outlined'
          theme={theme}
          onChangeText={(text) => setFormValues({ ...formValues, email: text })}
        />
        <TextInput
          label='Phone Number'
          value={formValues.phone}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(false)}
          mode='outlined'
          keyboardType='number-pad'
          theme={theme}
          onChangeText={(text) => setFormValues({ ...formValues, phone: text })}
        />
        <TextInput
          label='Salary'
          value={formValues.salary}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(true)}
          mode='outlined'
          theme={theme}
          onChangeText={(text) => setFormValues({ ...formValues, salary: text })}
        />
        <TextInput
          label='Position'
          value={formValues.position}
          style={styles.inputStyle}
          onFocus={() => setEnableShift(true)}
          mode='outlined'
          theme={theme}
          onChangeText={(text) => setFormValues({ ...formValues, position: text })}
        />
        <Button
          mode='contained'
          style={styles.inputStyle}
          theme={picture ? { colors: { primary: 'green' } } : theme}
          icon={picture ? 'check' : 'upload'}
          onPress={() => setModalVisible(true)}
        >
          {picture ? 'Image Uploaded' : 'Upload image'}
        </Button>
        {route.params ? (
          <Button
            mode='contained'
            style={styles.inputStyle}
            theme={{ colors: { primary: 'purple' } }}
            icon='content-save'
            onPress={() => {
              updateDetails();
            }}
          >
            Update Details
          </Button>
        ) : (
          <Button
            mode='contained'
            style={styles.inputStyle}
            theme={theme}
            icon='content-save'
            onPress={() => {
              submitForm();
              // console.log('Logging form values', formValues);
            }}
          >
            Save
          </Button>
        )}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                mode='contained'
                icon='camera'
                theme={theme}
                onPress={() => pickImageFromCamera()}
              >
                Camera
              </Button>
              <Button
                mode='contained'
                theme={theme}
                icon='image'
                onPress={() => pickImageFromGallery()}
              >
                Gallary
              </Button>
            </View>
            <Button theme={theme} onPress={() => setModalVisible(false)}>
              Cancel
            </Button>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

const theme = {
  colors: {
    primary: '#006aff',
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#fff',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default CreateEmployee;
