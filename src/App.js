
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'
import ListaProjetos from './Components/ListaProjetos'
import { createStackNavigator } from 'react-navigation';

import Projetos from './Screens/Projetos'
import Projeto from './Screens/Projeto'
import NovoProjeto from './Screens/NovoProjeto'
import Planta from './Screens/Planta'
import NovaPlanta from './Screens/NovaPlanta'

const RootStack = createStackNavigator({
  Projetos: {screen: Projetos},
  Projeto: {screen: Projeto},
  NovoProjeto: {screen: NovoProjeto},
  Planta: {screen: Planta},
  NovaPlanta: {screen: NovaPlanta}
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
