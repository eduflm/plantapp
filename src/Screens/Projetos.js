
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

    this.renderProjetos  = this.renderProjetos .bind(this)

    AsyncStorage.getItem('Projetos').then((resultado) => {
      let data = JSON.parse(resultado)
      console.log(typeof(data))
      let {projetos} = this.state
      projetos.push(data)
      this.setState({projetos})
    });
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Projetos');
      if (value !== null) {
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

  renderProjetos(){
    let promise = new Promise((resolve, reject) => {
      this._retrieveData().then((resultado) => {
        resolve(resultado)
      })
    })

    promise.then(() => {

    })
    // this._retrieveData().then((resultado) => {
    //   var data = []
    //   data.push(JSON.parse(resultado))
    //   console.log("dsiadjksksksksksks")
    //   console.log("3333")
    //   return <Text>dsiadjoiajsd</Text>
    //   // return <ListaProjetos navigation={this.props.navigation} projetos={data}/>
    // })
    // console.log("2222")
    return <Text>dsiadjoiajsd</Text>
  }
  

  render() {
    
    const {projetos} = this.state

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


