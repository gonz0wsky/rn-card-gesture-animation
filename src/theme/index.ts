import {useContext} from 'react';
import {Dimensions, Platform} from 'react-native';
import {ThemeContext} from 'styled-components/native';

export const colors = {
  black: '#000000',
  mirage: '#1D293C',
  white: '#FFFFFF',
};

const {width, height} = Dimensions.get('window');

export const device = {
  height,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  width,
};

const theme = {
  colors,
  device,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
