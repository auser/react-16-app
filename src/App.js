import React from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';

import Home from './pages/Home';

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
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Container>
    <Footer />
  </FrontPage>
);

export default App;
