import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import OptionsProjetoButton from '../Components/OptionsProjetoButton';
import HistoricoPlanta from '../Components/HistoricoPlanta';
import DescricaoPlanta from '../Components/DescricaoPlanta';

export default class Planta extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.planta.nome,
  });

  constructor(props){
    super(props)

    this.state = {
      option: 0
    }

    this.onClickOption = this.onClickOption.bind(this)
    // this.renderOption = this.renderOption.bind(this)
  }

  onClickOption(option){
    this.setState({option})
  }

  render() {
    const {option} = this.state
    let planta = this.props.navigation.getParam('planta');
    let novoHistorico = this.props.navigation.getParam('novoHistorico')
    if(novoHistorico) {
      if (planta.coletas.length === 0){
        planta.primeiraColeta = novoHistorico.data
      }
      novoHistorico.titulo = "Coleta " + ((planta.coletas.length) + 1)
      planta.coletas.push(novoHistorico)    
      this.props.navigation.setParams({novoHistorico: null})
      planta.ultimaColeta = novoHistorico.data
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerBotaos}>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Descrição" option={0} onClick={this.onClickOption} activated={option === 0}/>
          </View>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Coleta" option={1} onClick={this.onClickOption} activated={option === 1}/>
          </View>
        </View>
        <View style={styles.content}>
          {option === 1 ? (
            <HistoricoPlanta coletas={planta.coletas} navigation={this.props.navigation}/>
          ):(
            <ScrollView style={styles.container}>
              <DescricaoPlanta planta={planta}/>
            </ScrollView>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerBotaos: {
    flexDirection: 'row',
  },
  containerBotao: {
    flex: 1,
    maxHeight: 80
  },
  content: {
    flex: 1,
    margin: 20
  }
});


