import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class OptionsProjetoButton extends Component {
  render() {
    const {onClick, option, activated} = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => onClick(option)}
          title={this.props.nome}
          accessibilityLabel={this.props.nome}
        >
          <View style={styles.button}>
            <Text style={activated ? styles.buttonTextActivated : styles.buttonText}>{this.props.nome}</Text>
          </View>
          <View style={styles.activated}/>
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
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "blue",
  },
  buttonText: {
    padding: 20,
    color: '#428BCA',
  },
  buttonTextActivated: {
    padding: 5,
    color: '#428BCA',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
});
