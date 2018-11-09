import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import OptionsProjetoButton from '../Components/OptionsProjetoButton';
import DescricaoProjeto from '../Components/DescricaoProjeto';
import PessoasProjeto from '../Components/PessoasProjeto';


export default class Projeto extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.nome,
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

  // renderOption(){
  //   const {option} = this.state
  //   console.log("render", option)
  //   switch(option) {
  //     case 0:
  //       return <DescricaoProjeto/>
  //     case 1:
  //       return <PessoasProjeto/>
  //     default:
  //       return null
  //   }
  // }

  render() {
    const id = this.props.navigation.getParam('id');
    const nome = this.props.navigation.getParam('nome');

    const {option} = this.state

    return (
      <View style={styles.container}>
        <View style={styles.containerBotaos}>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Descricao" option={0} onClick={this.onClickOption} activated={option === 0}/>
          </View>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Pessoas" option={1} onClick={this.onClickOption} activated={option === 1}/>
          </View>
        </View>
        <View style={styles.content}>
          {option === 1 ? (
            <PessoasProjeto/>
          ):(
            <DescricaoProjeto/>
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
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  containerBotao: {
    flex: 1
  }
});

