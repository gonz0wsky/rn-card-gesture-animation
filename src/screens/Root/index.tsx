import React, {FC} from 'react';
import {BACKGROUND} from './contants';
import {Container, Frame, Card, Background} from './styles';

const source = {uri: BACKGROUND};

const Root: FC = () => (
  <Container>
    <Background source={source} />
    <Frame />
    <Card />
  </Container>
);

export default Root;
