import React, { Component } from 'react'
import {Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class CustomButton extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          title={this.props.nome}
          accessibilityLabel={"Botão genérico"}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}> {this.props.label} </Text>
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
    backgroundColor: 'blue',
    // borderColor: "blue",
    borderWidth: 0.5,
    borderRadius: 3,
    height:70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});