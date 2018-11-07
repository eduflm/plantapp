import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ButtonProjeto from './ButtonProjeto'
import Header from './Header'

export default class ListaProjetos extends Component {

  _renderItem = ({item}) => {
    return (
      <ButtonProjeto nome={item.nome} id={item.id} navigation={this.props.navigation} />
    )
  };

  _keyExtractor = (item, index) => item.id;


  render() {

    const {projetos} = this.props

    
    return (
      <View style={styles.container}>
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