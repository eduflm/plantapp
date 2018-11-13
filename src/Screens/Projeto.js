import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import OptionsProjetoButton from '../Components/OptionsProjetoButton';
import DescricaoProjeto from '../Components/DescricaoProjeto';
import PessoasProjeto from '../Components/PessoasProjeto';
import PlantasProjeto from '../Components/PlantasProjeto';
import { FloatingAction } from 'react-native-floating-action';


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

  render() {
    const id = this.props.navigation.getParam('id');
    const nome = this.props.navigation.getParam('nome');
    const descricao = this.props.navigation.getParam('descricao')
    const pessoas = this.props.navigation.getParam('pessoas')
    const plantas = this.props.navigation.getParam('plantas')
    const {option} = this.state

    const actions = [{
      text: 'Adicionar novo projeto',
      name: 'bt_novo_projeto',
      icon: require('../Assets/add1.png'),
      position: 1,
      size: 100
    }];

    return (
      <View style={styles.container}>
        <View style={styles.containerBotaos}>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Descricao" option={0} onClick={this.onClickOption} activated={option === 0}/>
          </View>
          <View style={styles.containerBotao}>
            <OptionsProjetoButton nome="Plantas" option={1} onClick={this.onClickOption} activated={option === 1}/>
          </View>
        </View>
        <View style={styles.content}>
          {option === 1 ? (
            <View style={styles.container}>
              <PlantasProjeto plantas={plantas} navigation={this.props.navigation}/>
              <FloatingAction
                actions={actions}
                overrideWithAction={true}
                onPressItem={
                  () => {
                    this.props.navigation.navigate('NovaPlanta')
                  }
                }
              />
            </View>
          ):(
            <ScrollView style={styles.container}>
              <DescricaoProjeto descricao={descricao} style={ styles.descProj }/>
              <PessoasProjeto pessoas={pessoas}/>
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
  },
  descProj: {
    
  }
});

