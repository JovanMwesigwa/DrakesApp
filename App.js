/* eslint-disable prettier/prettier */
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
import { CartScreen, Home, ProductDetailsScreen } from './src/Screens';

const App: () => Node = () => {
  return (
    <AppScreen>
      <CartScreen />
    </AppScreen>
  );
};


export default App;
