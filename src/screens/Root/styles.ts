import styled from 'styled-components/native';
import {Card as BaseCard} from 'components';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Background = styled(FastImage).attrs({resizeMode: 'cover'})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Frame = styled.View`
  position: absolute;
  align-self: center;
  width: ${({theme}) => theme.device.width * 2.91}px;
  aspect-ratio: 1.115;
  border-width: ${({theme}) => theme.device.width}px;
  border-radius: ${({theme}) => theme.device.width * 1.055}px;
  border-color: ${({theme}) => theme.colors.black};
`;

export const Card = styled(BaseCard)``;
