import React, {FC, memo} from 'react';
import {Container, Circle, LinesContainer, Line, LineShort} from './styles';
import {Props} from './types';
import useLogic from './logic';
import {GestureDetector} from 'react-native-gesture-handler';

const Card: FC<Props> = ({style}) => {
  const {animation, gesture} = useLogic();
  return (
    <GestureDetector gesture={gesture}>
      <Container style={[style, animation]}>
        <Circle />
        <LinesContainer>
          <Line />
          <LineShort />
        </LinesContainer>
      </Container>
    </GestureDetector>
  );
};

export default memo(Card);
