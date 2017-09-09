import React, {Component} from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';
import NavigationLink from './NavigationLink';
import Toggle from './Toggle';
import typography from '../util/typography';
const {rhythm} = typography;

export const Header = styled.header`
  display: flex;
  padding: ${rhythm(3 / 4)} ${rhythm(1)} ${rhythm(3 / 4)};
  margin-bottom: 1em;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 2;
`;

class NavigationHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };
  }

  toggle = item => () => {
    this.setState(prevState => ({
      [item]: !prevState[item]
    }));
  };

  render() {
    const {menu} = this.state;
    return (
      <Header>
        <Logo to="/">Logo</Logo>
        <Navigation role="navigation" style={{top: menu ? 0 : '-100vh'}}>
          <NavigationLink to={'/svg/'} title="SVG">
            SVG
          </NavigationLink>
          <NavigationLink to={'/about/'} title="About">
            About
          </NavigationLink>
        </Navigation>
        <Toggle onClick={this.toggle('menu')} active={menu} />
      </Header>
    );
  }
}

export default NavigationHeader;
