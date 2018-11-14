
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
          nome: "Abóboras Gigantes",
          descricao: "Esse projeto tem como objetivo verificar o crescimento de abóboras em laboratório enquanto elas escutam múscias relaxantes",
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
              nome: "Abóbora Clássica",
              descricao: "Está abóbora está sendo criada som de Beethoven e Mozart",
              especie: "Cucurbita",
              primeiraColeta: "30/10/2018",
              ultimaColeta: "14/11/2018",
              coletas: [
                {
                  titulo: "Coleta 1",
                  data: "30/10/2018",
                  hora: "14:40h",
                  altura: "5cm",
                  observacao: "Primeira coleta da planta clássica"
                },
                {
                  titulo: "Coleta 2",
                  data: "14/11/2018",
                  hora: "15:15h",
                  altura: "15cm",
                  observacao: "É possível observar um grande crescimento da planta que estava ao som de músicas clássicas"
                }
              ]
            },
            {
              nome: "Abóbora Moderna",
              descricao: "Essa planta foi criado ao som de múscias relaxantes modernas",
              especie: "Cucurbita moschata",
              primeiraColeta: "10/11/2018",
              ultimaColeta: "10/11/2018",
              coletas: [
                {
                  titulo: "Coleta 1",
                  data: "10/11/2018",
                  hora: "09:50h",
                  altura: "5cm",
                  observacao: "Primeira coleta da planta criada com música moderna"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          nome: "Mandiocas noturnas",
          descricao: "Estudo de mandiocas criadas com pouca luz do sol",
          pessoas: [
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
              nome: "Mandioca da madrugada",
              descricao: "Essa mandioca está sendo criada na total escuridão",
              especie: "Amarga",
              primeiraColeta: "21/10/2018",
              ultimaColeta: "01/11/2018",
              coletas: [
                {
                  titulo: "Coleta 1",
                  data: "30/10/2018",
                  hora: "14:40h",
                  altura: "5cm",
                  observacao: "Primeira coleta da mandioca da madrugada"
                },
                {
                  titulo: "Coleta 2",
                  data: "01/11/2018",
                  hora: "15:15h",
                  altura: "2cm",
                  observacao: "A espécie morreu"
                }
              ]
            },
            {
              nome: "Mandioca lunar",
              descricao: "Esta mandioca foi criada majoritariamente no escuro tendo poucos momentos de luz lunar ",
              especie: "Brava",
              primeiraColeta: "01/10/2018",
              ultimaColeta: "12/10/2018",
              coletas: [
                {
                  titulo: "Coleta 1",
                  data: "01/10/2018",
                  hora: "12:50h",
                  altura: "5cm",
                  observacao: "Primeira coleta da mandioca lunar"
                },
                {
                  titulo: "Coleta 2",
                  data: "12/10/2018",
                  hora: "12:50h",
                  altura: "6cm",
                  observacao: "A planta continua viva mas não cresceu"
                }
              ]
            }
          ]
        }
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

