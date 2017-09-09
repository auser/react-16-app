import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
