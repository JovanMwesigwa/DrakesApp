/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {AppScreen, AppText, HeaderText} from './src/Components';
import { Home, ProductDetailsScreen } from './src/Screens';

const App: () => Node = () => {
  return (
    <AppScreen>
      <ProductDetailsScreen />
    </AppScreen>
  );
};


export default App;
