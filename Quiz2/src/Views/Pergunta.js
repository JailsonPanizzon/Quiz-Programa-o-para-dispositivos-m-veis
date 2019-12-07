import React, { Component } from "react";
import { Text, View,StyleSheet, } from "react-native";
import { ScreenOrientation } from "expo";
const db = require("./pergunta.json");
export default class Main extends Component {
  async changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  render() {
   this.changeScreenOrientation()
    return (
      <View style={styles.container}>
    <View style={styles.containerPergunta}>
    <Text>{db.pergunta.enunciado}</Text>
    </View>
    <View style={styles.containeralternativas}>
    <Text>alternativa</Text>

    </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPergunta: {
    width: "30%",
    backgroundColor: "red",
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  containeralternativas: {
    width: "70%",
    backgroundColor: "blue",
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  container: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'stretch'
  }
})