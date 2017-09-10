import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, errCode) {
    this.setState(() => ({hasError: true}));
  }

  render() {
    const {className} = this.props;

    if (this.state.hasError)
      return (
        <Container className={className}>Something bad happened</Container>
      );

    return this.props.children;
  }
}

export default styled(ErrorBoundary)`
  color: red;
`;
