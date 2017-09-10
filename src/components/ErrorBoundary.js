import React from 'react';
import styled from 'styled-components';

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
    if (this.state.hasError)
      return <div className="className">Something bad happened</div>;

    return this.props.children;
  }
}

export default styled(ErrorBoundary)`
  color: red;
`;
