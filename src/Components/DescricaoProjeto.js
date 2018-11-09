import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DescricaoProjeto extends Component {
  render() {
    const {descricao} = this.props
    return (
      <View>
        <Text style={styles.title}> Descrição: </Text>
        <View style={styles.contentContainer}>
          <Text> {descricao} </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 26
  },
  contentContainer: {
    margin: 15
  }
});
