import React from 'react';

import styled from 'styled-components';

const LANG = {
  en: {
    home: 'Home',
    'about-us': 'About us'
  },
  es: {
    home: 'Página principal',
    'about-us': 'Sobre nosotros'
  }
};

const TranslatedName = ({name, lang = 'en'}) => LANG[lang][name];
const SidebarLink = props => (
  <li>
    <TranslatedName {...props} />
  </li>
);

export const Sidebar = props => {
  return (
    <div className={props.className}>
      <h4>Sidebar</h4>
      <ul>
        <SidebarLink name="home" />
        <SidebarLink name="about-us" />
      </ul>
    </div>
  );
};

export default styled(Sidebar)`
  flex: 0.25;
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
