import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Typography from '../util/typography';
const {rhythm} = Typography;

export const Footer = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  min-height: 150px;
  padding: ${rhythm(3 / 4)} ${rhythm(1)} ${rhythm(3 / 4)};
  justify-content: space-between;
  align-items: center;
  background-color: #eee;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    .col {
      width: 100%;
      ul {
        left: 0;
        right: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        li {
          margin: 0;
        }
      }
    }
  }
`;

export const Foot = props => (
  <Footer>
    <Logo to="/">Logo</Logo>
    <div className="col">
      <h4>Contact</h4>
      <ul>
        <li>Twitter</li>
        <li>Email</li>
      </ul>
    </div>
    <div className="col">
      <h4>Legal</h4>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <div className="col">
      <h4>Sitemap</h4>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  </Footer>
);

export default Foot;
