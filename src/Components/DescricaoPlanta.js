import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class DescricaoPlanta extends Component {
  render() {
    const {descricao, primeiraColeta, ultimaColeta, especie} = this.props.planta
    return (
      <View>
        <Text style={styles.title}>Descrição</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.descricao}>{descricao}</Text>
        </View>
        <Text style={styles.title}>Espécie</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.descricao}>{especie}</Text>
        </View>
        <View style={styles.contentContainer}>          
          <Text style={styles.coleta}>Primeira coleta: {primeiraColeta}</Text>
          <Text style={styles.coleta}>Última coleta: {ultimaColeta}</Text>
        </View>
        <View style={styles.mapContainer}>
          <Image source={require('../Assets/map.png')} />
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
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'serif',
    marginBottom: 10
  },
  contentContainer: {
    margin: 15,
    marginBottom: 20,
  },
  mapContainer: {
    marginTop: 15 
  },
  descricao: {
    marginBottom: 20,
    fontSize: 16,
  },
  coleta: {
    fontSize: 16
  }
});
