import React, { Component } from 'react'
import {Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class ButtonProjeto extends Component {
  constructor(props){
    super(props);

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    Alert.alert("Você pressionou o botão do " + this.props.nome)
    console.log("Pressionando o borão")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onPressButton}w
          title={this.props.nome}
          accessibilityLabel={"Botão do " + this.props.name}
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    padding: 20,
    color: 'blue'
  }
});