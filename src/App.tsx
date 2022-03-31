import React from 'react';
import {Platform, StyleSheet, UIManager} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Root} from 'screens';
import {ThemeProvider} from 'styled-components/native';
import theme from 'theme';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <GestureHandlerRootView style={styles.gestureHandler}>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
});

export default App;
