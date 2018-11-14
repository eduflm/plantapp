import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ButtonColeta from './ButtonColeta';
import { FloatingAction } from 'react-native-floating-action';

export default class HistoricoPlanta extends Component {
  constructor(props){
    super(props)

    this.state = {
      recarrega: false
    }
  }

  _renderItem = ({item}) => {
    console.log(item)
    return (
      <ButtonColeta coleta={item} />
    )
  };

  _keyExtractor = (item, index) => item.nome;

  componentWillReceiveProps(){
    this.setState({recarrega: !this.state.recarrega})
  }

  render() {
    const {coletas} = this.props
    const {recarrega} = this.state

    const actions = [{
      text: 'Adicionar novo projeto',
      name: 'bt_novo_projeto',
      icon: require('../Assets/add1.png'),
      position: 1,
      size: 100
    }];


    console.log(coletas)
    return (
      <View style={styles.container}>
        <FlatList
          extraData={recarrega}
          data={coletas}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <FloatingAction
          actions={actions}
          overrideWithAction={true}
          onPressItem={
            () => {
              this.props.navigation.navigate('NovoHistorico')
            }
          }
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
