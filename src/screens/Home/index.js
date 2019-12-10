import React, {useEffect} from 'react';
import {lockOrientation} from '../../services/lockOrientation';

import styled from 'styled-components/native';

import {Container} from '../../components/Container';

import {
  GeografiaImage,
  HistoriaImage,
  InformaticaImage,
  MatematicaImage,
} from '../../assets/images';

const CategoryRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Category = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const CategoryTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
`;
const CategoryImage = styled.Image`
  font-size: 25px;
  text-align: center;
  width: 140px;
  height: 140px;
  border-radius: 70;
  overflow: hidden;
`;
const Title = styled.Text`
  font-size: 40px;
  text-align: center;
`;
const ScoreButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  height: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  bottom: 0;
`;
const ScoreButton = styled.TouchableOpacity`
  width: 30%;
  height: 40px;
  border-radius: 5;
  border-color: #00000066;
  align-items: center;
  justify-content: center;
  border-width: 1;
  background-color: ${props => (props.disabled ? '#1f1fff99' : '#1f1fff')};
`;
const ScoreButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const Home = ({navigation}) => {
  useEffect(() => {
    lockOrientation();
  }, []);

  const handleQuiz = category => {
    navigation.navigate('Category', {category});
  };

  return (
    <Container>
      <Title>Temas</Title>
      <CategoryRow>
        <Category onPress={() => handleQuiz('Geografia')}>
          <CategoryTitle>Geografia</CategoryTitle>
          <CategoryImage source={GeografiaImage} />
        </Category>
        <Category onPress={() => handleQuiz('Historia')}>
          <CategoryTitle>História</CategoryTitle>
          <CategoryImage source={HistoriaImage} />
        </Category>
        <Category onPress={() => handleQuiz('Informatica')}>
          <CategoryTitle>Informática</CategoryTitle>
          <CategoryImage source={InformaticaImage} />
        </Category>
        <Category onPress={() => handleQuiz('Matematica')}>
          <CategoryTitle>Matemática</CategoryTitle>
          <CategoryImage source={MatematicaImage} />
        </Category>
      </CategoryRow>
      <ScoreButtonContainer>
        <ScoreButton onPress={() => navigation.navigate('Score')}>
          <ScoreButtonText>Minhas Pontuações</ScoreButtonText>
        </ScoreButton>
      </ScoreButtonContainer>
    </Container>
  );
};

export default Home;
