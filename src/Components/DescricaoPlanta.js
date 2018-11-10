import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DescricaoPlanta extends Component {
  render() {
    const {descricao, primeiraColeta, ultimaColeta, especie} = this.props.planta
    return (
      <View>
        <Text style={styles.title}> Descrição: </Text>
        <View style={styles.contentContainer}>
          <Text style={styles.descricao}> {descricao} </Text>
        </View>
        <Text style={styles.title}> Espécie: </Text>
        <View style={styles.contentContainer}>
          <Text style={styles.descricao}> {especie} </Text>
        </View>
        <View style={styles.contentContainer}>          
          <Text style={styles.coleta}> Primeira coleta: {primeiraColeta} </Text>
          <Text style={styles.coleta}> Ultima coleta: {ultimaColeta} </Text>
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
  },
  descricao: {
    marginBottom: 20
  },
  coleta: {
    fontSize: 16
  }
});
