import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ButtonProjeto from './ButtonProjeto'

export default class ListaProjetos extends Component {

  _renderItem = ({item}) => {
    return (
      <ButtonProjeto nome={item.nome} id={item.id} navigation={this.props.navigation} />
    )
  };

  _keyExtractor = (item, index) => item.id;

  componentWillReceiveProps(){
    console.log("recieve")
    this.forceUpdate()
  }


  render() {

    const {projetos} = this.props

    console.log("projetos: ", projetos)

    return (
      <View style={styles.container}>
        <FlatList
          extraData={projetos}
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