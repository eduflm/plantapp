import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Projeto extends Component {
  render() {
    const id = this.props.navigation.getParam('id');
    const nome = this.props.navigation.getParam('nome');
    console.log(this.props.navigation)
    return (
      <View>
        <Text> Este é o {nome} </Text>
        <Text> Este é o {id} </Text>
      </View>
    )
  }
}
