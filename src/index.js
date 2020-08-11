/* eslint global-require: 0 */

import React, { useEffect, useState } from 'react';
import { StoreProvider, useStoreState } from 'easy-peasy';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';

import apolloClient from './utils/apolloClient';
import { store, persistor } from './store';
import theme from './utils/theme';
import initNavigation from './screens';
import Splash from './screens/Splash';
import PushNotifications from './components/PushNotifications';
import './utils/i18n';

console.disableYellowBox = true;

const AppInner = () => {
  const isLoggedIn = useStoreState((state) => state.user.isLoggedIn);

  const Navigation = initNavigation({
    isLoggedIn,
  });

  return (
    <>
      <Navigation />
      <PushNotifications />
    </>
  );
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
      'Rubik-SemiBold': require('./assets/fonts/Rubik-SemiBold.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
      'Rubik-ExtraBold': require('./assets/fonts/Rubik-ExtraBold.ttf'),
      'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={<Splash />} persistor={persistor}>
          <StoreProvider store={store}>
            <>{fontLoaded ? <AppInner /> : <Splash />}</>
          </StoreProvider>
        </PersistGate>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
