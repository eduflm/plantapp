import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert,KeyboardAvoidingView } from 'react-native'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButtom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class NovaPlanta extends Component {
  static navigationOptions = {
    title: 'Criar nova planta',
  };

  constructor(props){
    super(props)

    this.state = {
      nome: '',
      descricao: '',
      especie: ''
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    const {nome,descricao, especie} = this.state
    // if (nome === ""){
    //   Alert.alert(
    //     'Nome vazio',
    //     'O campo "nome do projeto" não pode estar vazio',
    //   )
    //   return
    // }

    // if (descricao === ""){
    //   Alert.alert(
    //     'Descrição vazia',
    //     'O campo "Descrição do projeto" não pode estar vazio',
    //   )
    //   return
    // }
    
    this.props.navigation.navigate('Projeto', {novaPlanta: {nome, descricao, especie, primeiraColeta: "", ultimaColeta: "", coletas: []}})
    // this.props.navigation.goBack()
  }

  render() {
    return (

      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View>
            <CustomInput
              label={"Nome do planta: "}
              onChangeText={(nome) => this.setState({nome})}
              value={this.state.nome}
              placeholder="Digite aqui o nome da planta"
            />
            <CustomInput
              multiline = {true}
              numberOfLines = {6}
              label={"Descrição da planta: "}
              onChangeText={(descricao) => this.setState({descricao})}
              value={this.state.descricao}
              placeholder="Digite aqui a descrição da planta"
            />
            <CustomInput
              label={"Espécie: "}
              onChangeText={(especie) => this.setState({especie})}
              value={this.state.especie}
              placeholder="Digite aqui a espécie da planta"
            />
          </View>
          <View style={{height: 80}}/>
        </KeyboardAwareScrollView>
        <View style={styles.viewButtonCadastrar}>
          <CustomButton nome={"Cadastrar planta"} label={"Cadastrar planta"} onPress={this._onPressButton}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewButtonCadastrar: {
    position: 'absolute',
    width: "100%",
    bottom: 0,
  }
 
});
