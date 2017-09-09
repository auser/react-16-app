import React from 'react';

import styled from 'styled-components';

export const Sidebar = props => {
  return (
    <div className={props.className}>
      <h4>Sidebar</h4>
      <ul>
        <li>Some link</li>
        <li>Some link</li>
        <li>Some link</li>
        <li>Some link</li>
      </ul>
    </div>
  );
};

export default styled(Sidebar)`
  flex: 0.5;
  padding: 10px;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
