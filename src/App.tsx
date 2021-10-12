import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import { HomePage } from './pages/home';
import { appStore } from './store/store';

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <h1>
          <a
            className="appLink"
            href="/"
          >
            misterInput
          </a>
        </h1>
      </header>
      <Provider store={appStore}>
        <HomePage></HomePage>
      </Provider>
    </div>
  );
}

export default App;
