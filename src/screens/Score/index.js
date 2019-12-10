import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {lockOrientation} from '../../services/lockOrientation';

import AsyncStorage from '@react-native-community/async-storage';

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
const CategoryTitle = styled.Text`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`;
const CategoryImage = styled.ImageBackground`
  width: 48%;
  height: 100px;
  border-radius: 50;
  margin-bottom: 20px;
  border-color: #00000066;
  border-width: 1;
  /* object-fit: cover; */
  overflow: hidden;
`;
const PointsContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff99;
`;
const Points = styled.Text`
  font-size: 25px;
`;
const Title = styled.Text`
  font-size: 40px;
  text-align: center;
`;

// const db = require('../pergunta.json');

const Score = ({navigation}) => {
  const [geografia, setGeografia] = useState(0);
  const [historia, setHistoria] = useState(0);
  const [informatica, setInformatica] = useState(0);
  const [matematica, setMatematica] = useState(0);

  useEffect(() => {
    getScore();
    lockOrientation();
  }, []);

  const getScore = async () => {
    const pointsGeografia = Number(
      await AsyncStorage.getItem('score-Geografia'),
    );
    const pointsHistoria = Number(await AsyncStorage.getItem('score-Historia'));
    const pointsInformatica = Number(
      await AsyncStorage.getItem('score-Informatica'),
    );
    const pointsMatematica = Number(
      await AsyncStorage.getItem('score-Matematica'),
    );
    setGeografia(pointsGeografia);
    setHistoria(pointsHistoria);
    setInformatica(pointsInformatica);
    setMatematica(pointsMatematica);
  };

  return (
    <ScrollView>
      <Container>
        <Title>Pontuações</Title>
        <CategoryRow>
          <CategoryImage source={GeografiaImage}>
            <PointsContainer>
              <CategoryTitle>Geografia</CategoryTitle>
              <Points>Pontos: {geografia}</Points>
            </PointsContainer>
          </CategoryImage>
          <CategoryImage source={HistoriaImage}>
            <PointsContainer>
              <CategoryTitle>História</CategoryTitle>
              <Points>Pontos: {historia}</Points>
            </PointsContainer>
          </CategoryImage>
        </CategoryRow>
        <CategoryRow>
          <CategoryImage source={InformaticaImage}>
            <PointsContainer>
              <CategoryTitle>Informática</CategoryTitle>
              <Points>Pontos: {informatica}</Points>
            </PointsContainer>
          </CategoryImage>
          <CategoryImage source={MatematicaImage}>
            <PointsContainer>
              <CategoryTitle>Matemática</CategoryTitle>
              <Points>Pontos: {matematica}</Points>
            </PointsContainer>
          </CategoryImage>
        </CategoryRow>
      </Container>
    </ScrollView>
  );
};

export default Score;
