import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default);
  });
}

const renderApp = App => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
};

renderApp(App);

registerServiceWorker();
