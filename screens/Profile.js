import * as React from 'react';
import { StyleSheet, View, Text, Image, Linking, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Profile = (props) => {
  const { item } = props.route.params;

  const openDial = (tel) => {
    Platform.OS === 'android' ? Linking.openURL(`tel:${tel}`) : Linking(`telprompt: ${tel}`);
  };

  const deleteEmployee = () => {
    fetch('http://10.0.2.2:8080/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: item?._id }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} Successfully fired`);
        props?.navigation.navigate('Home');
      })
      .catch((err) => {
        console.log('Something went wrong while deleting employee', err);
        Alert.alert('Something went wrong while deleting employee, please try again');
      });
  };
  return (
    <View style={styles.root}>
      <LinearGradient colors={['#006aff', '#6bc1ff']} style={{ height: '20%' }} />
      <View
        style={{
          alignItems: 'center',
          marginTop: -70,
        }}
      >
        <Image
          source={{
            uri: `${
              item.picture ||
              'https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }`,
          }}
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
          }}
        />
      </View>
      <View style={{ alignItems: 'center', margin: 15 }}>
        <Title>{item.name}</Title>
        <Text style={{ fontSize: 18 }}>{item.position}</Text>
      </View>
      <Card
        style={styles.myCard}
        onPress={() => {
          Linking.openURL(`mailto:${item.email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name='email' size={32} color='#006aff' />
          <Text style={styles.myText}>{item.email}</Text>
        </View>
      </Card>
      <Card style={styles.myCard} onPress={() => openDial(`${item.phone}`)}>
        <View style={styles.cardContent}>
          <Entypo name='phone' size={32} color='#006aff' />
          <Text style={styles.myText}>{item.phone}</Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name='attach-money' size={32} color='#006aff' />
          <Text style={styles.myText}>{item.salary} USD</Text>
        </View>
      </Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Button
          icon='account-edit'
          theme={theme}
          mode='contained'
          onPress={() => console.log('edit button pressed')}
        >
          Edit
        </Button>
        <Button
          icon='delete'
          mode='contained'
          theme={theme}
          onPress={() => {
            deleteEmployee();
          }}
        >
          Fire Employee
        </Button>
      </View>
    </View>
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
  myCard: {
    margin: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
  },
  myText: {
    fontSize: 18,
    marginLeft: 7,
    marginTop: 3,
  },
});
export default Profile;
