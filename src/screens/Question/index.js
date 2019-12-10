import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import styled from 'styled-components/native';

import {lockOrientation} from '../../services/lockOrientation';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const QuestionContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
`;
const EnunciateContainer = styled.View`
  width: 48%;
  align-items: flex-start;
  margin-bottom: 15px;
`;
const QuestionContent = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;
const QuestionText = styled.Text`
  font-size: 18px;
`;
const QuestionImage = styled.Image`
  width: 150px;
  height: 150px;
`;
const AlternativeContainer = styled.View`
  width: 48%;
  align-items: stretch;
`;
const Alternative = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5;
  border-color: #00000066;
  border-width: 1;
  background-color: ${props =>
    props.correct ? '#30d130' : props.wrong ? '#f02b2b' : 'transparent'};
`;
const AlternativeText = styled.Text`
  font-size: 16px;
  width: 100%;
`;
const NextButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  height: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  bottom: 0;
`;
const NextButton = styled.TouchableOpacity`
  width: 30%;
  height: 40px;
  border-radius: 5;
  border-color: #00000066;
  align-items: center;
  justify-content: center;
  border-width: 1;
  background-color: ${props => (props.disabled ? '#1f1fff99' : '#1f1fff')};
`;
const NextButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
});

const Question = ({question, index, onNext}) => {
  const [alternativas, setAlternativas] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    console.log('question', question);
    lockOrientation();
    setAlternativas(sortearAlternativas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  const sortearAlternativas = () => {
    let listaAlternativas = question.alternativas;
    // console.log('listaAlternativas', listaAlternativas);
    let sorteadas = [];
    while (sorteadas.length < 4) {
      var aleatorio = Math.floor(Math.random() * 7);

      if (sorteadas.indexOf(aleatorio + 1) === -1) {
        sorteadas.push(aleatorio + 1);
      }
    }
    let alternativasSorteadas = [];
    aleatorio = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
      alternativasSorteadas.push(listaAlternativas[sorteadas[i]]);
    }
    alternativasSorteadas[aleatorio] = listaAlternativas[0];
    // console.log('alternativasSorteadas', alternativasSorteadas);
    return alternativasSorteadas;
  };

  const getQuestionImage = image => {
    switch (image) {
      case 'australia.jpg':
        return (
          <QuestionImage
            source={require('../../assets/images/australia.jpg')}
          />
        );
      case 'china.jpg':
        return (
          <QuestionImage source={require('../../assets/images/china.jpg')} />
        );
      case 'inglaterra.jpg':
        return (
          <QuestionImage
            source={require('../../assets/images/inglaterra.jpg')}
          />
        );
      case 'portugal.jpg':
        return (
          <QuestionImage source={require('../../assets/images/portugal.jpg')} />
        );
      case 'expon0.png':
        return (
          <QuestionImage source={require('../../assets/images/expon0.png')} />
        );
      case 'fracao.png':
        return (
          <QuestionImage source={require('../../assets/images/fracao.png')} />
        );
      case 'multiplicacao0.png':
        return (
          <QuestionImage
            source={require('../../assets/images/multiplicacao0.png')}
          />
        );
      case 'raiz81.png':
        return (
          <QuestionImage source={require('../../assets/images/raiz81.png')} />
        );
      case 'somaCP.png':
        return (
          <QuestionImage source={require('../../assets/images/somaCP.png')} />
        );
      case 'somaS.png':
        return (
          <QuestionImage source={require('../../assets/images/somaS.png')} />
        );
      case 'subt0.png':
        return (
          <QuestionImage source={require('../../assets/images/subt0.png')} />
        );
      case 'imgES.png':
        return (
          <QuestionImage source={require('../../assets/images/imgES.png')} />
        );
      case 'imgPB.png':
        return (
          <QuestionImage source={require('../../assets/images/imgPB.png')} />
        );

      default:
        break;
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <EnunciateContainer>
          {question.img !== '0' && getQuestionImage(question.img)}
          {question.enunciado !== '0' && (
            <QuestionText>{`${index + 1}) ${question.enunciado}`}</QuestionText>
          )}
          <QuestionContent>
            {question.enunciado === '0' && (
              <QuestionText>{`${index + 1}) `}</QuestionText>
            )}
            <QuestionText>{question.pergunta}</QuestionText>
          </QuestionContent>
        </EnunciateContainer>
        <AlternativeContainer>
          <RadioButton.Group
            // onValueChange={alt => !value && setValue(alt)}
            value={value}
            style={styles.radioGroup}>
            <Alternative
              correct={
                value &&
                value === question.alternativas[0] &&
                value === alternativas[0]
              }
              wrong={
                value &&
                value !== question.alternativas[0] &&
                value === alternativas[0]
              }>
              <RadioButton value={alternativas[0]} />
              <AlternativeText
                onPress={() => !value && setValue(alternativas[0])}>
                {alternativas[0]}
              </AlternativeText>
            </Alternative>
            <Alternative
              correct={
                value &&
                value === question.alternativas[0] &&
                value === alternativas[1]
              }
              wrong={
                value &&
                value !== question.alternativas[0] &&
                value === alternativas[1]
              }>
              <RadioButton value={alternativas[1]} />
              <AlternativeText
                onPress={() => !value && setValue(alternativas[1])}>
                {alternativas[1]}
              </AlternativeText>
            </Alternative>
            <Alternative
              correct={
                value &&
                value === question.alternativas[0] &&
                value === alternativas[2]
              }
              wrong={
                value &&
                value !== question.alternativas[0] &&
                value === alternativas[2]
              }>
              <RadioButton value={alternativas[2]} />
              <AlternativeText
                onPress={() => !value && setValue(alternativas[2])}>
                {alternativas[2]}
              </AlternativeText>
            </Alternative>
            <Alternative
              correct={
                value &&
                value === question.alternativas[0] &&
                value === alternativas[3]
              }
              wrong={
                value &&
                value !== question.alternativas[0] &&
                value === alternativas[3]
              }>
              <RadioButton value={alternativas[3]} />
              <AlternativeText
                onPress={() => !value && setValue(alternativas[3])}>
                {alternativas[3]}
              </AlternativeText>
            </Alternative>
          </RadioButton.Group>
        </AlternativeContainer>
      </QuestionContainer>
      <NextButtonContainer>
        <NextButton
          disabled={!value}
          onPress={() => {
            onNext();
            setValue();
            setAlternativas([]);
          }}>
          <NextButtonText>{index < 4 ? 'Próxima' : 'Finalizar'}</NextButtonText>
        </NextButton>
      </NextButtonContainer>
    </Container>
  );
};

export default Question;
