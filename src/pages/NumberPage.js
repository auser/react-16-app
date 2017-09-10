import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

import {scaleOrdinal} from 'd3-scale';
import {schemeAccent} from 'd3-scale-chromatic';

const accent = scaleOrdinal(schemeAccent).domain([0, 100]);

const UnstyledBox = ({className, number}) => (
  <div className={className}>{number}</div>
);
const Box = styled(UnstyledBox)`
  padding: 5px;
  width: 80px;
  font-size: 0.5rem;
  border: 1px solid ${props => accent(props.color)};
  background: ${props => accent(props.color)};
`;

export class NumberPage extends React.Component {
  constructor(props) {
    super(props);

    this.update();
    this.state = {
      date: 0,
      news: [...Array(1000).keys()]
    };
  }

  update = () => {
    fetch('https://andthetimeis.com/utc/now.json')
      .then(data => data.json())
      .then(json => json.dateString)
      .then(time => {
        const t = new Date(time).getTime();
        this.setState({
          date: t
        });
      })
      .then(this.update);
  };

  render() {
    const {className} = this.props;
    const {date} = this.state;

    return (
      <Container>
        <h2>
          Lots of numbers + <code>fetch</code>
        </h2>
        <div className={className}>
          {this.state.news.map(n => (
            <Box key={n} color={n * Math.random()} number={date - n} />
          ))}
        </div>
      </Container>
    );
  }
}

export default styled(NumberPage)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;
