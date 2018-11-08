
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native'
import ListaProjetos from './Components/ListaProjetos'
import { createStackNavigator } from 'react-navigation';

import Header from './Components/Header'
import Projetos from './Screens/Projetos'
import Projeto from './Screens/Projeto'
import NovoProjeto from './Screens/NovoProjeto'

const RootStack = createStackNavigator({
  Projetos: {screen: Projetos},
  Projeto: {screen: Projeto},
  NovoProjeto: {screen: NovoProjeto}
},{
    initialRouteName: 'Projetos',
    headerStyle: {
      backgroundColor: '#5994f2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
    );
  }
}
