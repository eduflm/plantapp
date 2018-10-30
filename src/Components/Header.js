import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Plantapp </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 30,
    color: 'white',
  }
});