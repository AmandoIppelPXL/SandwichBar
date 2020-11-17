import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import { createStackNavigator } from "react-navigation-stack";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/reducks';
import { createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createStackNavigator({
    Login: {
      screen: Login
    },
  });

  const store = createStore(reducer, applyMiddleware(thunk));

  const AppContainer = createAppContainer(Stack);

  useEffect(() => {
    //@ts-ignore
    store.dispatch(loginUser({ user: { username: 'swo', email: 'swo@asist.be', password: 'swoswoswo' } }));
  }, []);

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
