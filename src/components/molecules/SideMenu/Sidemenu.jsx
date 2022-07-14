import React from 'react';
import { Icon } from '../../atoms/Icon/styled';
import Container from './syled';

// Assets
import cartIcon from '../../../images/shop.png';
import searchIcon from '../../../images/search.png';

function Sidemenu() {
  return (
    <Container>
      <Icon src={cartIcon} alt="Cart icon" width="20px" height="20px" />
      <Icon src={searchIcon} alt="Cart icon" width="20px" height="20px" />
    </Container>
  );
}

export default Sidemenu;
