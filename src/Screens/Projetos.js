
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native'
import ListaProjetos from '../Components/ListaProjetos'
import { FloatingAction } from 'react-native-floating-action';

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Projetos',
  };

  constructor(props){
    super(props)

    this.state = {
      projetos: [
        {
          id: 1,
          nome: "Projeto 10"
        },
        {
          id: 2,
          nome: "Projeto 6"
        },
        {
          id: 3,
          nome: "Projeto 4"
        }
      ]
    }
  }

  render() {

    const {projetos} = this.state

    let novoProjeto = this.props.navigation.getParam('novoProjeto');
    console.log(novoProjeto)
    if (novoProjeto){
      let projetos = this.state.projetos
      projetos.push(novoProjeto)
      this.setState({
        projetos
      })
      novoProjeto = null
    }

    const actions = [{
      text: 'Adicionar novo projeto',
      name: 'bt_novo_projeto',
      icon: require('../Assets/add1.png'),
      position: 1,
      size: 100
    }];

    return (
      <View style={styles.container}>
        <ListaProjetos navigation={this.props.navigation} projetos={projetos}/>
        <FloatingAction
          actions={actions}
          overrideWithAction={true}
          onPressItem={
            () => {
              this.props.navigation.navigate('NovoProjeto')
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

