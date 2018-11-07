
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'
import ListaProjetos from '../Components/ListaProjetos'
import { createStackNavigator } from 'react-navigation';

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Projetos',
  };

  render() {
    return (
      <View style={styles.container}>
        {console.log(this.props)}
        <ListaProjetos navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
