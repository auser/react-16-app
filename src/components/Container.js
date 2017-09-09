// import React from 'react';

import styled from 'styled-components';
import typography from '../util/typography';
const {rhythm} = typography;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: ${rhythm(3 / 4)} ${rhythm(1)} ${rhythm(3 / 4)};
`;

export default Container;
