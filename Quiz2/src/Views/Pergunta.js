import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { ScreenOrientation } from "expo";
import { RadioButton, Text } from "react-native-paper";

const db = require("./pergunta.json");
export default class Main extends Component {
  state = {
    value: "first",
    alternativas: []
  };

  componentDidMount() {
    let res = this.sortearAlterantivas();

    this.setState({ alternativas: res });
  }

  sortearAlterantivas() {
    let listaAlterantivas = db.alternativas;
    let sorteadas = [];
    while (sorteadas.length < 4) {
      var aleatorio = Math.floor(Math.random() * 7);

      if (sorteadas.indexOf(aleatorio + 1) == -1) sorteadas.push(aleatorio + 1);
    }
    console.log(listaAlterantivas);
    let alternativasSorteadas = [];
    aleatorio = Math.floor(Math.random() * 4);
    for (i = 0; i < 4; i++) {
      alternativasSorteadas.push(listaAlterantivas[sorteadas[i]]);
    }
    alternativasSorteadas[aleatorio] = listaAlterantivas[0];
    console.log(alternativasSorteadas);
    return alternativasSorteadas;
  }

  async changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  }

  render() {
    this.changeScreenOrientation();
    return (
      <View style={styles.container}>
        <View style={styles.containerPergunta}>
          <Text>{db.pergunta}</Text>
        </View>
        <View style={styles.containeralternativas}>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <View style={styles.alternativa}>
              <Text>{this.state.alternativas[0]}</Text>
              <RadioButton value="first" />
            </View>
            <View style={styles.alternativa}>
              <Text>{this.state.alternativas[1]}</Text>
              <RadioButton value="second" />
            </View>
            <View style={styles.alternativa}>
              <Text>{this.state.alternativas[2]}</Text>
              <RadioButton value="third" />
            </View>
            <View style={styles.alternativa}>
              <Text>{this.state.alternativas[3]}</Text>
              <RadioButton value="fourty" />
            </View>
          </RadioButton.Group>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerPergunta: {
    width: "50%",
    backgroundColor: "red",
    flexDirection: "column",
    alignItems: "stretch"
  },
  containeralternativas: {
    width: "100%",
    backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "stretch"
  },
  alternativa: {
    width: "70%",
    backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "stretch"
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch"
  }
});
