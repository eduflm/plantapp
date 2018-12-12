import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert,KeyboardAvoidingView, Picker, DatePickerAndroid, TimePickerAndroid, Keyboard } from 'react-native'
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
      medida: 'mm',
      quantidadeFrutos: 0,
      observacao: '',
    }

    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    const {data, hora, altura, observacao,quantidadeFrutos, medida} = this.state
    if (data === ""){
      Alert.alert(
        'Data inválida',
        'O campo "data da coleta" não pode estar vazio',
      )
      return
    }

    if (hora === ""){
      Alert.alert(
        'Hora inválida',
        'O campo "Hora da coleta" não pode estar vazio',
      )
      return
    }

    if (altura === ""){
      Alert.alert(
        'Altura inválida',
        'O campo "Altura da coleta" não pode estar vazio',
      )
      return
    }

    let finalAltura = altura + medida
    
    this.props.navigation.navigate('Planta', {novoHistorico: {data, hora, altura: finalAltura, quantidadeFrutos, observacao}})
  }

  changeValue = (medida) => {
    this.setState({medida})
  }

  selectDate = async () => {
    Keyboard.dismiss()
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        monthPlusOne = month + 1
        let dia = day < 10 ? 0+String(day) : day
        let mes = monthPlusOne < 10 ? 0+String(monthPlusOne) : monthPlusOne
        data = `${dia}/${mes}/${year}`
        this.setState({data})
        // Selected year, month (0-11), day
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  selectHour = async () => {
    Keyboard.dismiss()
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: true, // Will display '2 PM'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        let hora = `${hour}:${minute}`
        this.setState({hora})
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    const {medida} = this.state
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View>
            <CustomInput
              label={"Data"}
              onFocus={this.selectDate}
              value={this.state.data}
              placeholder="Digite aqui a data da coleta"
            />
            <CustomInput
              label={"Hora"}
              onFocus={this.selectHour}
              value={this.state.hora}
              placeholder="Digite aqui a hora da coleta"
            />
            <View style={styles.containerMedida}>
              <View style={styles.containerAltura}>
                <CustomInput
                  label={"Altura da planta"}
                  onChangeText={(altura) => this.setState({altura})}
                  value={this.state.altura}
                  placeholder="Digite aqui a altura da planta durante a coleta"
                  keyboardType='numeric'
                />
              </View>
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={medida}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) => this.changeValue(itemValue)}>
                    <Picker.Item label={"mm"} value={"mm"} />
                    <Picker.Item label={"cm"} value={"cm"} />
                    <Picker.Item label={"m"} value={"m"} />
                </Picker>
              </View>
            </View>
            <CustomInput
              label={"Quantidade de frutos"}
              keyboardType="numeric"
              onChangeText={(quantidadeFrutos) => this.setState({quantidadeFrutos})}
              value={this.state.quantidadeFrutos}
              placeholder="Digite aqui a quantidade de frutos coletados"
            />
            <CustomInput
              multiline = {true}
              numberOfLines = {3}
              label={"Observações"}
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
  },
  containerMedida: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerAltura: {
    width: "60%",
  },
  containerPicker: {
    width: "40%",
    borderColor: '#232323', 
    borderBottomWidth: 1,
  },
  picker: {
    marginTop: 25,
    height: 40, 
    borderColor: '#232323', 
    borderBottomWidth: 1,
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  }
 
});
