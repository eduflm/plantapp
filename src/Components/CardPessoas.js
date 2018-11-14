import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class CardPessoas extends Component {
  render() {
    const {nome, imagem, email} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: imagem}}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer} >
            <Text style={styles.nome}>{ nome }</Text>
          </View>
          <View style={styles.emailContainer} >
            <Text style={styles.email}>{ email }</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: "#dddddd",
    borderWidth: 0.5,
    marginBottom: 5,
    borderRadius: 10,
  },
  avatarContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 25
  },
  nameContainer: {
    justifyContent: 'center',
  },
  emailContainer: {
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: '500'
  },
  avatar: {
    width: 55, 
    height: 55,
    borderRadius: 50,
    borderColor: 'black'
  }
});

