import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import CardPessoas from './CardPessoas';

export default class PlantasProjeto extends Component {
  constructor(props){
    super(props)

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(planta){
    console.log("planta", planta)
    this.props.navigation.navigate('Planta', {planta})
  }


  render() {
    const {plantas} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Plantas: </Text>
        {plantas.map((planta) => (
          <View>
            <TouchableOpacity
              onPress={() => this._onPressButton(planta)}
              title={planta.nome}
              accessibilityLabel={planta.nome}
            >
              <View style={styles.containerBotaoPlanta}>
                <Text style={styles.plantaNome}>{planta.nome}</Text>
              </View>              
            </TouchableOpacity>
          </View>
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
  containerBotaoPlanta: {
    justifyContent: 'center',
    marginBottom: 5,
    height:40,
  },
  plantaNome: {
    fontSize: 20,
    marginLeft: 20
  }
});
