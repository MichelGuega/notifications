import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Heading from '@components/Heading';
import * as S from './styles';

const Home = () => (
  <S.Wrapper>
    <StatusBar style="light" />
    <Heading color="#ffff">Poli Junior</Heading>
    <S.StyledText>Template para iniciar projetos da PJ</S.StyledText>
    <S.StyledText>criado por Augusto Iryoda</S.StyledText>
  </S.Wrapper>
);

export default Home;
