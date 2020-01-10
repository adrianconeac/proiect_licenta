import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './pages/home';
import AddItem from './pages/AddItem';
import ListItem from './pages/ListItem';
import LoginTab from './pages/login';
import RegisterTab from "./pages/Register";

const AppNavigator = createStackNavigator(
    {
      AddItemScreen: AddItem,
      ListItemScreen: ListItem,
      HomeScreen: Home,
      LoginScreen: LoginTab,
      RegisterScreen: RegisterTab
    },
    {
      initialRouteName: 'AddItemScreen',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
