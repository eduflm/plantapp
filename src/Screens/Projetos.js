
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native'
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
      projetos: []
    }

    this._retrieveData = this._retrieveData.bind(this)

    // this._retrieveData().then((resultado) => {
    //   this.setState({projetos: resultado })
    // })
  }

  _retrieveData = async () => {
    console.log("CHAMOUUUU!!!!!")
    try {
      const value = await AsyncStorage.getItem('Projetos');
      if (value !== null) {
        // We have data!!
        console.log("deu bom")
        console.log(value);
        return value
      } else {
        console.log("sem valor")
      }
     } catch (error) {
      console.log("deu ruim")
       console.log(error)
     }
  }

  // componentDidUpdate = () => {
  //   this._retrieveData().then((resultado) => {
  //     this.setState({projetos: resultado })
  //   })
  // }
  

  render() {

    // const {projetos} = this.state

    var projetos = []



    this._retrieveData().then((resultado) => {
      projetos = [resultado]
    })

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

