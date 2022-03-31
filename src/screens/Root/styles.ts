import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.black};
`;
