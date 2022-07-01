import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {HEIGHT, WIDTH} from './constants';

export const Container = Animated.createAnimatedComponent(
  styled.View`
    align-items: flex-end;
    background-color: ${({theme}) => theme.colors.black};
    border-radius: 20px;
    flex-direction: row;
    height: ${HEIGHT}px;
    padding: 20px;
    width: ${WIDTH}px;
    z-index: 999;
  `,
);

export const Circle = styled.View`
  aspect-ratio: 1;
  background-color: ${({theme}) => theme.colors.mirage};
  border-radius: 25px;
  height: 50px;
`;

export const LinesContainer = styled.View`
  height: 50px;
  flex: 1;
  margin-left: 10px;
  justify-content: space-between;
`;

export const Line = styled.View`
  height: 20px;
  width: 60%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.mirage};
`;

export const LineShort = styled(Line)`
  width: 30%;
`;
