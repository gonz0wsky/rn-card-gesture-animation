import styled from 'styled-components/native';

export const Container = styled.View`
  aspect-ratio: 1.41;
  background-color: ${({theme}) => theme.colors.black};
  border-radius: 20px;
  align-items: flex-end;
  flex-direction: row;
  padding: 20px;
  width: ${({theme}) => theme.device.width - 40}px;
`;

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
