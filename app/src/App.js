import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';

import drizzleOptions from './drizzleOptions';
import loadingComponent from './LoadingComponent';

import logo from './logo.svg';
import './App.css';
import { isObject } from 'util';
import LoadingComponent from './LoadingComponent';
import CryptoTruffles from './CryptoTruffles';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

class App extends Component {
  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <LoadingComponent>
          <div className="App">
            <h1>CryptoTruffles</h1>
            <CryptoTruffles />
          </div>
        </LoadingComponent>
      </DrizzleContext.Provider>
    );
  }
}

export default App;