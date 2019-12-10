import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { RadioButton, Text } from "react-native-paper";
import styled from 'styled-components/native'
import { Container } from '../../components/Container'

const QuestionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
const QuestionText = styled.Text`
  font-size: 18px;
`;
const AlternativeContainer = styled.View`
  width: 100%;
  align-Items: stretch;
`;
const Alternative = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: 'blue'
  },
});

const db = require("../pergunta.json");

const Question = ({ navigation }) => {
  const [alternativas, setAlternativas] = useState([]);
  const [value, setValue] = useState('first');

  useEffect(() => {
    setAlternativas(sortearAlternativas())
  }, [])

  const handleBack = () => {
    navigation.goBack()
  }

  const sortearAlternativas = () => {
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

  return (
    <Container>
      <QuestionContainer>
        <QuestionText>{db.pergunta}</QuestionText>
      </QuestionContainer>
      {console.log('alt', alternativas)}
      <AlternativeContainer>
        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={value}
          style={styles.radioGroup}
        >
          <Alternative>
            <RadioButton value={alternativas[0]} />
            <Text
              onPress={() => setValue(alternativas[0])}>{alternativas[0]}</Text>
          </Alternative>
          <Alternative>
            <RadioButton value={alternativas[1]} />
            <Text
              onPress={() => setValue(alternativas[1])}>{alternativas[1]}</Text>
          </Alternative>
          <Alternative>
            <RadioButton value={alternativas[2]} />
            <Text
              onPress={() => setValue(alternativas[2])}>{alternativas[2]}</Text>
          </Alternative>
          <Alternative>
            <RadioButton value={alternativas[3]} />
            <Text
              onPress={() => setValue(alternativas[3])}>{alternativas[3]}</Text>
          </Alternative>
        </RadioButton.Group>
      </AlternativeContainer>
    </Container>
  );
}

export default Question