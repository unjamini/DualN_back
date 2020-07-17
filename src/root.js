// @flow

import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './containers/Home';
import Results from './containers/Results';
import Session from './containers/Session';
import appReducer, { initialState } from './reducers';

const Stack = createStackNavigator();

const store = createStore(appReducer, initialState, applyMiddleware(thunk));

const Root = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} headerShown={false} />
        <Stack.Screen name="Session" component={Session} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default Root;
