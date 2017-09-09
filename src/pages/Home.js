import React from 'react';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {throwError: false};
  }
  onClick = () => {
    this.setState(state => ({throwError: true}));
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextState.throwError) {
      throw new Error('Error will happen');
    }
  }

  render() {
    return [
      <Sidebar key="sidebar" />,
      <Container key="container">
        <h2>Page content goes here</h2>
      </Container>
    ];
  }
}

export default Home;
