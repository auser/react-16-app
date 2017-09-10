import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import NumberPage from './pages/NumberPage';
import Buggy from './pages/Buggy';

// Content container
const Container = styled.div`
  display: flex;
  flex-direction: row nowrap;
  flex: 1 0 auto;
`;

const App = props => (
  <FrontPage>
    <Header />
    <Container>
      <ErrorBoundary>
        <Switch>
          <Route path="/buggy" component={Buggy} />
          <Route path="/numbers" component={NumberPage} />
          <Route path="/" component={Home} />
        </Switch>
      </ErrorBoundary>
    </Container>
    <Footer />
  </FrontPage>
);

export default App;
