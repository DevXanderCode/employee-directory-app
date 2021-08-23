import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';
// reducer
import { reducer, initialState } from './reducers/reducer';

// const store = createStore(reducer);
const myContext = React.createContext();

const Stack = createStackNavigator();

const myOptions = {
  title: 'Home Screen',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};

function App(props) {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={myOptions} />
        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{ ...myOptions, title: 'Profile' }}
        />
        <Stack.Screen
          name='Create'
          component={CreateEmployee}
          options={{ ...myOptions, title: 'Create Employee' }}
        />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </View>
  );
}

export default () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    // <Provider store={store}>
    <myContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </myContext.Provider>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    // marginTop: Constants.statusBarHeight
  },
});
