import React, { useState, useEffect } from 'react'
import { RadioButton, Text } from "react-native-paper";
import styled from 'styled-components/native'
import { Container } from '../../components/Container'

const QuestionContainer = styled.View`
  width: 50%;
  background-color: red;
  flex-direction: column;
  align-items: stretch;
`;
const AlternativeContainer = styled.View`
  width: 100%;
  background-color: blue;
  flex-direction: column;
  align-Items: stretch;
`;
const Alternative = styled.View`
  width: 70%;
  background-color: blue;
  flex-direction: column;
  align-items: stretch;
`;

const db = require("../pergunta.json");

const Question = ({ navigation }) => {
  const [alternativas, setAlternativas] = useState([]);
  const [value, setValue] = useState('first');

  useEffect(() => {
    setAlternativas(sortearAlterantivas())
  }, [])

  const handleBack = () => {
    navigation.goBack()
  }

  const sortearAlterantivas = () => {
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
        <Text>{db.pergunta}</Text>
      </QuestionContainer>
      <AlternativeContainer>
        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={value}
        >
          <Alternative>
            <Text>{alternativas[0]}</Text>
            <RadioButton value="first" />
          </Alternative>
          <Alternative>
            <Text>{alternativas[1]}</Text>
            <RadioButton value="second" />
          </Alternative>
          <Alternative>
            <Text>{alternativas[2]}</Text>
            <RadioButton value="third" />
          </Alternative>
          <Alternative>
            <Text>{alternativas[3]}</Text>
            <RadioButton value="fourty" />
          </Alternative>
        </RadioButton.Group>
      </AlternativeContainer>
    </Container>
  );
}

export default Question