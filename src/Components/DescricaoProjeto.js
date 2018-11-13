import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DescricaoProjeto extends Component {
  render() {
    const {descricao} = this.props
    return (
      <View>
        <Text style={styles.title}>Descrição</Text>
        <View style={styles.contentContainer}>
          <Text style={ styles.desc }>{ descricao }</Text>
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
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'serif'
  },
  contentContainer: {
    margin: 15
  },
  desc: {
    fontSize: 15,
  }
});
