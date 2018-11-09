import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class OptionsProjetoButton extends Component {
  render() {
    const {onClick, option} = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => onClick(option)}
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
