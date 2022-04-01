import React, {FC, memo} from 'react';
import {Container, Circle, LinesContainer, Line, LineShort} from './styles';
import {Props} from './types';

const Card: FC<Props> = ({style}) => (
  <Container style={style}>
    <Circle />
    <LinesContainer>
      <Line />
      <LineShort />
    </LinesContainer>
  </Container>
);

export default memo(Card);
