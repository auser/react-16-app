import React from 'react';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';

const Aux = ({children}) => children;

export class Home extends React.Component {
  render() {
    return (
      <Aux>
        <Sidebar lang="en" />
        <Container>
          <h2>Page content goes here</h2>
          <p>Lorem ipsum dolor sit</p>
        </Container>
      </Aux>
    );
  }
}

export default Home;
