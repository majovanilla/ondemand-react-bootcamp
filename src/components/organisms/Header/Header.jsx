import React from 'react';
import Logo from '../../atoms/Logo/Logo';

// molecules
import MainMenu from '../../molecules/MainMenu/MainMenu';
import Sidemenu from '../../molecules/SideMenu/Sidemenu';

// Styles
import { Container } from './styled';

// Assets
import logo from '../../../images/main-logo.png';

function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Store icon" />
      <MainMenu />
      <Sidemenu />
    </Container>
  );
}

export default Header;
