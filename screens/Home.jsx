import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation, ...props }) => {
  const [employees, setEmployees] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //   const data = [
  //     {
  //       _id: 1,
  //       name: 'Ejike Silva',
  //       email: 'ejikesilva112@gmail.com',
  //       phone: '0123456789',
  //       salary: '100k',
  //       position: 'Backend Dev',
  //       picture:
  //         'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //     {
  //       _id: 2,
  //       name: 'Fahwemi Hakeem',
  //       email: 'hakeekfahwemi@outlook.com',
  //       phone: '1234567890',
  //       salary: '90k',
  //       position: 'Andriod Dev',
  //       picture:
  //         'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //     {
  //       _id: 3,
  //       name: 'Nweke Favour .O',
  //       email: 'favournweke234@gmail.com',
  //       phone: '2345678901',
  //       salary: '200k',
  //       position: 'Data Analyst',
  //       picture:
  //         'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //     {
  //       _id: 4,
  //       name: 'Adebayo David',
  //       email: 'davidadebayo123@gmail.com',
  //       phone: '3456789012',
  //       salary: '105k',
  //       position: 'ML Expert',
  //       picture:
  //         'https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //     {
  //       _id: 5,
  //       name: 'Emeka Chinoso',
  //       email: 'emekaChinoso@yahoo.com',
  //       phone: '4567890123',
  //       salary: '140k',
  //       position: 'Cloud Expert',
  //       picture:
  //         'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //     {
  //       _id: 6,
  //       name: 'Nweke Chinedu Alex',
  //       email: 'nwekealexchinedu@gmail.com',
  //       phone: '5678901234',
  //       salary: '180k',
  //       position: 'Full Stack Dev',
  //       picture:
  //         'https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     },
  //   ];

  const fetchEmployees = () => {
    fetch('http://10.0.2.2:8080', {
      method: 'get',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('employee list', data);
        setEmployees(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('Got this error when i tried to get the list of employees', err);
        Alert.alert('Error', err);
      });
  };

  React.useEffect(() => {
    fetchEmployees();
  }, []);

  const renderData = (item) => (
    <Card style={styles.myCard} onPress={() => navigation.navigate('Profile', { item })}>
      <View style={styles.cardView}>
        <Image
          source={{
            uri: `${item.picture}`,
          }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <View style={{ marginLeft: 10, alignContent: 'center' }}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.position}</Text>
        </View>
      </View>
    </Card>
  );
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={employees}
        renderItem={({ item }) => renderData(item)}
        keyExtractor={(item) => `${item._id}`}
        onRefresh={fetchEmployees}
        refreshing={isLoading}
      />

      <FAB
        style={styles.fab}
        theme={{ colors: { accent: '#006aff' } }}
        icon='plus'
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  text: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 0,
    right: 0,
  },
});

export default Home;
