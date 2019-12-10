import React from 'react';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import {Container} from '../../components/Container';

const QuestionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
`;

const db = require('../pergunta.json');

const Category = ({navigation}) => {
  const sortearPerguntas = () => {
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
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>História</Text>
            </View>
            <Image
              source={require("../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Matemática</Text> 
            </View>
            <Image
              source={require("../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Informática</Text>
            </View>
            <Image
              source={require("../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerCategoria}>
            <View style={styles.constainerButton}>
              <Text>Geografia</Text>
            </View>
            <Image
              source={require("../img/historia.jpeg")}
              style={styles.bg}
            ></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

export default Category;
