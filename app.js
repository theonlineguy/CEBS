import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
//importing components
import Login from './Login';
import signup from './signup';
import password from './password';
import idcard from './idcard'

export const SimpleApp = StackNavigator({
  Home: { screen: Login },
  Chat: { screen: signup },
  Next: { screen: password }, 
  Further: { screen: idcard}
});

export default class App extends React.Component {

  render() {
    return <SimpleApp />;
  }
}
