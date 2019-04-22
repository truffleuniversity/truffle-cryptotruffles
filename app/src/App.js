import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import drizzleOptions from './drizzleOptions';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import LoadingComponent from './LoadingComponent';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import MyTruffles from './components/MyTruffles';
import TruffleDetail from './components/TruffleDetail';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

class App extends Component {

  render() {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <LoadingComponent>
          <div className="App">
            <Router>
              <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/collection" component={Collection} />
                <Route path="/my" component={MyTruffles} />
                <Route path="/truffle/:id" component={TruffleDetail} />
              </div>
            </Router>
          </div>
        </LoadingComponent>
      </DrizzleContext.Provider>
    );
  }
}

export default App;