import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';

const Aux = ({children}) => children;

export class Buggy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hasError: false};
  }
  onClick = () => {
    this.setState({hasError: true});
  };

  componentDidUpdate() {
    throw new Error('Uh oh');
  }

  render() {
    return (
      <Aux>
        <Sidebar />
        <Container className={this.props.className}>
          <h2>Catch an error</h2>
          <button onClick={this.onClick}>Cause an exception</button>
        </Container>
      </Aux>
    );
  }
}

export default styled(Buggy)`
  button {
    border: 0;
  }
`;
