import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {  StatusBar, useColorScheme } from 'react-native';
import Navigation  from './navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TabStack from './navigation/tabStacks/TabStack';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme

  return (
    
    <NavigationContainer linking={{ prefixes: [prefix] }} onReady={async () => {
      await SplashScreen.hideAsync();
    }}>

      <Provider store={store}>
      <StatusBar barStyle={"dark-content"}/>
      <Navigation/>
      </Provider>
    </NavigationContainer>
  );
}
