import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class ButtonColeta extends Component {
  constructor(props){
    super(props)

    this.state = {
      contentIsVisible: false
    }
  }

  render() {
    const {contentIsVisible} = this.state
    const {titulo, data, hora, altura, observacao} = this.props.coleta
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setState({contentIsVisible: !contentIsVisible})
          }}
          title="expansivel"
          accessibilityLabel={"Botão expansível"}
        >
          <View style={styles.label}>
            <Text style={styles.text}>{titulo}</Text>
            <View style={styles.iconContainer}>
              {contentIsVisible ? (
                <Image style={styles.icons} source={require('../Assets/arrow_up.png')} />
              ): (
                <Image style={styles.icons} source={require('../Assets/arrow_down.png')} />
              )}
            </View>
          </View>
        </TouchableOpacity>
        {contentIsVisible ? (
          <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Data da coleta:</Text>
              <Text style={styles.contentDate}>{data}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Hora da coleta:</Text>
              <Text style={styles.contentDate}>{hora}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Altura da coleta:</Text>
              <Text style={styles.contentDate}>{altura}</Text>
            </View>
            <View>
              <Text style={styles.title}>Observação:</Text>
              <Text style={styles.contentGathering}>{observacao}</Text>
            </View>
          </View>
        ): (
          null
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5
  },
  label: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  iconContainer: {
    justifyContent: "center"
  },
  contentContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    borderTopWidth: 0.5
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10
  },
  titleDados: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  contentGathering: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10
  }, 
  contentDate: {
    // marginTop: 5,
    // marginLeft: 5
  }
});


