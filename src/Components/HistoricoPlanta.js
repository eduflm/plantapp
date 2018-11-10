import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ButtonColeta from './ButtonColeta';

export default class HistoricoPlanta extends Component {
  _renderItem = ({item}) => {
    console.log(item)
    return (
      <ButtonColeta coleta={item} />
    )
  };

  _keyExtractor = (item, index) => item.nome;

  render() {
    const {coletas} = this.props
    console.log(coletas)
    return (
      <View style={styles.container}>
        <FlatList
          data={coletas}
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
  },
});
