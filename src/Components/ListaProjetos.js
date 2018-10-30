import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ButtonProjeto from './ButtonProjeto'
import Header from './Header'

export default class ListaProjetos extends Component {
  
  // renderButton(projeto){
  //   console.log("call projeto", projeto)
  //   return (
  //     <ButtonProjeto nome={projeto.nome} id={projeto.id} />
  //   )
  // }

  _renderItem = ({item}) => {
    return (
      <ButtonProjeto nome={item.nome} id={item.id} />
    )
  };

  _keyExtractor = (item, index) => item.id;


  render() {

    const projetos = [
      {
        id: 1,
        nome: "Projeto 1"
      },
      {
        id: 2,
        nome: "Projeto 2"
      },
      {
        id: 3,
        nome: "Projeto 3"
      }
    ]
    
    return (
      <View style={styles.container}>
        <Header/>
        <FlatList
          data={projetos}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});