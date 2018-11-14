
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import ListaProjetos from '../Components/ListaProjetos'
import { FloatingAction } from 'react-native-floating-action';


type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'Projetos',
  };


  constructor(props) {
    super(props)
    this.state = {
      projetos: [
        {
          id: 1,
          nome: "Projeto 10",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio ex, sagittis id finibus ut, blandit eget ante. Suspendisse enim erat, imperdiet sit amet accumsan sit amet, malesuada eu felis. Proin imperdiet felis vel hendrerit sollicitudin. Ut et est a ipsum posuere vulputate non vel nunc. Cras rutrum metus neque, quis tincidunt arcu posuere eu. Duis laoreet sapien tellus, at aliquam orci pulvinar sed. Nullam vitae ligula semper sem hendrerit finibus. Integer rhoncus rhoncus libero, eget vulputate ex mattis at. Praesent et dui a dui lacinia congue a at eros. Aenean fringilla et lacus at aliquet",
          pessoas: [
            {
              nome: "Bárbara Almeida",
              email: "barbara@gmail.com",
              imagem: "https://www.stanforddaily.com/wp-content/uploads/2015/11/NEW.111215.MargauxGiles.jpg"
            },
            {
              nome: "Ana Barbosa",
              email: "ana@gmail.com",
              imagem: "https://st2.depositphotos.com/1035122/10611/i/950/depositphotos_106118560-stock-photo-brunette-woman-student-hold-pack.jpg"
            },{
              nome: "Usuário",
              email: "usuario@gmail.com",
              imagem: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png"
            }
          ],
          plantas: [
            {
              nome: "Planta 1",
              descricao: "Uma planta bem loca",
              especie: "Uma espécie qualquer",
              primeiraColeta: "30/10/2018",
              ultimaColeta: "10/11/1997",
              coletas: [
                {
                  titulo: "Coleta 1",
                  data: "10/11/2018",
                  hora: "19:36h",
                  altura: "30cm",
                  observacao: "observacao da planta"
                },
                {
                  titulo: "Coleta 2",
                  data: "10/11/2018",
                  hora: "19:36h",
                  altura: "30cm",
                  observacao: "observacao da planta"
                },
                {
                  titulo: "Coleta 3",
                  data: "10/11/2018",
                  hora: "19:36h",
                  altura: "30cm",
                  observacao: "observacao da planta"
                },
                {
                  titulo: "Coleta 4",
                  data: "10/11/2018",
                  hora: "19:36h",
                  altura: "30cm",
                  observacao: "observacao da planta"
                }
              ]
            },
            {
              nome: "Planta 2",
              descricao: "Uma planta mais loca ainda",
              coletas: []
            }
          ]
        },
        {
          id: 2,
          nome: "Projeto 6",
          descricao: "",
          pessoas: [],
          plantas: []
        },
        {
          id: 3,
          nome: "Projeto 4",
          descricao: "",
          pessoas: [],
          plantas: []
        },
      ],
    }
  }

  render() {

    let {projetos} = this.state

    let novoProjeto = this.props.navigation.getParam('novoProjeto');
    console.log(novoProjeto)
    if (novoProjeto !== undefined){
      projetos.push(novoProjeto)
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

