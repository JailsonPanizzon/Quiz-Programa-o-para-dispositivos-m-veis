import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
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

const Home = ({navigation}) => {
  useEffect(() => {
    lockOrientation();
  }, []);

  const handleQuiz = category => {
    navigation.navigate('Category', {category});
  };

  return (
    <ScrollView>
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
      </Container>
    </ScrollView>
  );
};

export default Home;
