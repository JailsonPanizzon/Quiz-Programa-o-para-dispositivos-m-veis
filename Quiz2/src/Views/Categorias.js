import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ScreenOrientation } from "expo";
import { Text } from "react-native-paper";

const db = require("./pergunta.json");
export default class Main extends Component {
  state = {
    value: "",
    alternativas: []
  };

  componentDidMount() {
    let res = this.sortearAlterantivas();
    this.setState({ alternativas: res });
  }

  sortearPerguntas() {
    let sorteadas = [];
    while (sorteadas.length < 5) {
      var aleatorio = Math.floor(Math.random() * 15);
      if (sorteadas.indexOf(aleatorio + 1) == -1) sorteadas.push(aleatorio + 1);
    }
    return sorteadas;
  }

  async changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }

  render() {
    this.changeScreenOrientation();
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>História</Text>
            </View>
            <Image
              source={require("../../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Matemática</Text>
            </View>
            <Image
              source={require("../../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Informática</Text>
            </View>
            <Image
              source={require("../../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Geografia</Text>
            </View>
            <Image
              source={require("../../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerCategoria: {
    flexDirection: "column",
    alignItems: "stretch",
    height: "50%",
    width: "50%",
    borderRadius: 10
  },
  container: {
    position: "absolute",
    backgroundColor: "transparent"
  },
  containerButton: {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch"
  },
  bg: {
    width: "100%"
  }
});
