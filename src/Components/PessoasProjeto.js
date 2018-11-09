import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CardPessoas from './CardPessoas';

export default class PessoasProjeto extends Component {
  render() {
    const {pessoas} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pessoas: </Text>
        {pessoas.map((pessoa) => (
          <CardPessoas nome={pessoa.nome} imagem={pessoa.imagem} email={pessoa.email}/>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    marginBottom: 5
  },
});
