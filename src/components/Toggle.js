import React from 'react';

import Arrow from './Arrow';

export const Toggle = ({onClick, active}) => (
  <Arrow
    onClick={onClick}
    style={{transform: active ? 'rotate(180deg)' : 'rotate(0deg)'}}
  />
);

export default Toggle;
