import React from 'react'
import { Text } from 'react-native-paper'
import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import { Container } from '../../components/Container'

const QuestionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: stretch;
`;

const db = require("../pergunta.json");

const Category = ({ navigation }) => {

  const sortearPerguntas = () => {

  }

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <ScrollView>
      <Container>
        <QuestionContainer>
          <Text>{db.pergunta}</Text>
        </QuestionContainer>
        <QuestionContainer>
          <Text>{db.pergunta}</Text>
        </QuestionContainer>
        <QuestionContainer>
          <Text>{db.pergunta}</Text>
        </QuestionContainer>
        <QuestionContainer>
          <Text>{db.pergunta}</Text>
        </QuestionContainer>
      </Container>
    </ScrollView>
  );
}


export default Category