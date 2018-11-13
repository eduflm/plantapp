import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert,KeyboardAvoidingView } from 'react-native'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButtom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class NovaPlanta extends Component {
  static navigationOptions = {
    title: 'Registrar nova coleta',
  };

  constructor(props){
    super(props)

    this.state = {
      data: '',
      hora: '',
      altura: '',
      observacao: '',
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
    
    this.props.navigation.navigate('Planta')
  }

  render() {
    return (

      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View>
            <CustomInput
              label={"Data: "}
              onChangeText={(data) => this.setState({data})}
              value={this.state.data}
              placeholder="Digite aqui a data da coleta"
            />
            <CustomInput
              label={"Hora: "}
              onChangeText={(hora) => this.setState({hora})}
              value={this.state.hora}
              placeholder="Digite aqui a hora da coleta"
            />
            <CustomInput
              label={"Altura da planta: "}
              onChangeText={(altura) => this.setState({altura})}
              value={this.state.altura}
              placeholder="Digite aqui a altura da planta durante a coleta"
            />
            <CustomInput
              multiline = {true}
              numberOfLines = {6}
              label={"Observações: "}
              onChangeText={(observacao) => this.setState({observacao})}
              value={this.state.observacao}
              placeholder="Digite aqui alguma observação sobre a coleta"
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
