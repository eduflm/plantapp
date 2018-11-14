import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class CustomInput extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput {...this.props} style={this.props.multiline ? styles.inputMultiline : styles.input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 15
  },
  label: {
    fontSize: 15,
    marginBottom: 5
  },
  input: {
    height: 40, 
    borderColor: '#232323', 
    // borderWidth: 0.2,
    // borderRadius: 5,
    borderBottomWidth: 1,
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  inputMultiline: {
    borderColor: '#232323',
    backgroundColor: '#d9d9d9',
    borderBottomWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  }
});