import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ScreenOrientation } from "expo";
import { RadioButton, Text } from "react-native-paper";

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

  sortearAlterantivas() {
    let listaAlterantivas = db.alternativas;
    let sorteadas = [];
    while (sorteadas.length < 4) {
      var aleatorio = Math.floor(Math.random() * 7);
      if (sorteadas.indexOf(aleatorio + 1) == -1) sorteadas.push(aleatorio + 1);
    }
    let alternativasSorteadas = [];
    aleatorio = Math.floor(Math.random() * 4);
    for (i = 0; i < 4; i++) {
      alternativasSorteadas.push(listaAlterantivas[sorteadas[i]]);
    }
    alternativasSorteadas[aleatorio] = listaAlterantivas[0];
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerPergunta}>
            <Text>{db.pergunta}</Text>
          </View>
          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
            style={styles.containeralternativas}
          >
            <View style={styles.alternativa}>
              <RadioButton value={this.state.alternativas[0]} />
              <Text
                onPress={() => {
                  this.setState({
                    value: this.state.alternativas[0]
                  });
                }}
              >
                {this.state.alternativas[0]}
              </Text>
            </View>
            <View style={styles.alternativa}>
              <RadioButton value={this.state.alternativas[1]} />
              <Text
                onPress={() => {
                  this.setState({
                    value: this.state.alternativas[1]
                  });
                }}
              >
                {this.state.alternativas[1]}
              </Text>
            </View>
            <View style={styles.alternativa}>
              <RadioButton value={this.state.alternativas[2]} />
              <Text
                onPress={() => {
                  this.setState({
                    value: this.state.alternativas[2]
                  });
                }}
              >
                {this.state.alternativas[2]}
              </Text>
            </View>
            <View style={styles.alternativa}>
              <RadioButton value={this.state.alternativas[3]} />
              <Text
                onPress={() => {
                  this.setState({
                    value: this.state.alternativas[3]
                  });
                }}
              >
                {this.state.alternativas[3]}
              </Text>
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerPergunta: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch"
  },
  radioButton: {
    width: "10%",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  label: {
    width: "90%",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  containeralternativas: {
    flexDirection: "column",
    alignItems: "stretch"
  },
  alternativa: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch"
  },
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch"
  }
});
