import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';

import Question from '../Question';
import styled from 'styled-components/native';

import {lockOrientation} from '../../services/lockOrientation';

import {
  Geografia,
  Historia,
  Informatica,
  Matematica,
} from '../../assets/questions';

import {
  GeografiaImage,
  HistoriaImage,
  InformaticaImage,
  MatematicaImage,
} from '../../assets/images';

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
const Loading = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const QuestionContainer = styled.View`
  padding: 10px 15px;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffffff99;
`;

const Category = ({navigation}) => {
  const category = navigation.getParam('category');
  const [questions, setQuestions] = useState([]);
  const [atualQuestion, setAtualQuestion] = useState(0);

  useEffect(() => {
    console.log('log');
    lockOrientation();
    setQuestions(sortearPerguntas());
  }, [sortearPerguntas]);

  const getCategoryQuestions = () => {
    switch (category) {
      case 'Geografia':
        return Geografia.questoes;
      case 'Historia':
        return Historia.questoes;
      case 'Informatica':
        return Informatica.questoes;
      case 'Matematica':
        return Matematica.questoes;

      default:
        break;
    }
  };

  const getCategoryImages = cat => {
    switch (cat) {
      case 'Geografia':
        return GeografiaImage;
      case 'Historia':
        return HistoriaImage;
      case 'Informatica':
        return InformaticaImage;
      case 'Matematica':
        return MatematicaImage;

      default:
        break;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sortearPerguntas = () => {
    let listaQuestions = getCategoryQuestions();
    // console.log('listaQuestions', listaQuestions);
    let sorteadas = [];
    while (sorteadas.length < 5) {
      var aleatorio = Math.floor(Math.random() * 15);

      if (sorteadas.indexOf(aleatorio + 1) === -1) {
        // console.log('aleattório', aleatorio);
        sorteadas.push(aleatorio);
      }
    }
    // console.log('sorteadas', sorteadas);
    let questionsSorteadas = [];
    aleatorio = Math.floor(Math.random() * 5);
    for (let i = 0; i < 5; i++) {
      questionsSorteadas.push(listaQuestions[sorteadas[i]]);
    }
    // console.log('questionsSorteadas', questionsSorteadas);
    return questionsSorteadas;
  };

  const handleNext = () => {
    if (atualQuestion === 4) {
      navigation.navigate('Home');
    } else {
      setAtualQuestion(old => old + 1);
    }
  };

  // const handleBack = () => {
  //   navigation.goBack();
  // };

  return (
    <Background source={getCategoryImages(category)}>
      <QuestionContainer>
        {questions[atualQuestion] ? (
          <Question
            category={category}
            question={questions[atualQuestion]}
            index={atualQuestion}
            onNext={handleNext}
          />
        ) : (
          <Loading>
            <ActivityIndicator size={30} />
          </Loading>
        )}
      </QuestionContainer>
    </Background>
  );
};

export default Category;
