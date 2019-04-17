import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import drizzleOptions from './drizzleOptions';

import logo from './logo.svg';
import './App.css';

import LoadingComponent from './LoadingComponent';
import Header from './components/Header';
import AllTruffles from './components/AllTruffles';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <LoadingComponent>
          <div className="App">
            <Header />
            <AllTruffles />
          </div>
        </LoadingComponent>
      </DrizzleContext.Provider>
    );
  }
}

export default App;