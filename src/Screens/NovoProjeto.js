import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButtom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class NovoProjeto extends Component {
  static navigationOptions = {
    title: 'Criar novo projeto',
  };

  constructor(props){
    super(props)

    this.state = {
      nome: '',
      descricao: ''
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    const {nome,descricao} = this.state
    if (nome === ""){
      Alert.alert(
        'Nome vazio',
        'O campo "nome do projeto" não pode estar vazio',
      )
      return
    }

    if (descricao === ""){
      Alert.alert(
        'Descrição vazia',
        'O campo "Descrição do projeto" não pode estar vazio',
      )
      return
    }
    
    this.props.navigation.navigate('Projetos', {novoProjeto: {id: 4, nome, descricao, pessoas: [{
      nome: "Usuário",
      email: "usuario@gmail.com",
      imagem: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png"
    }], plantas: []}})
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View>
            <CustomInput
              label={"Nome do projeto"}
              onChangeText={(nome) => this.setState({nome})}
              value={this.state.nome}
              placeholder="Digite aqui o nome do projeto"
            />
            <CustomInput
              label={"Descrição do projeto"}
              multiline = {true}
              numberOfLines = {3}
              onChangeText={(descricao) => this.setState({descricao})}
              value={this.state.descricao}
              placeholder="Digite aqui a descrição do projeto"
            />
          </View>
          <View style={{height: 80}}/>
        </KeyboardAwareScrollView>
        <View style={styles.viewButtonCadastrar}>
          <CustomButton nome={"Cadastrar Projeto"} label={"Cadastrar projeto"} onPress={this._onPressButton}/>
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
