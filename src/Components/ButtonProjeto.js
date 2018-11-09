import React, { Component } from 'react'
import {Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class ButtonProjeto extends Component {
  constructor(props){
    super(props);

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    this.props.navigation.navigate('Projeto', { id: this.props.id, nome: this.props.nome, descricao: this.props.descricao, pessoas: this.props.pessoas, plantas: this.props.plantas})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPressButton}
          title={this.props.nome}
          accessibilityLabel={"Botão do " + this.props.nome}
        >
          <View style={styles.button}>
              <Text style={styles.buttonText}>{this.props.nome}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'white',
    borderColor: "blue",
    borderWidth: 0.5,
    borderRadius: 10,
    height:70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  buttonText: {
    padding: 20,
    color: 'blue'
  }
});