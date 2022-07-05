import React from 'react';

// atoms
import MenuItem from '../../atoms/MenuItem/MenuItem';

// Styled components
import { Container } from './styled';

function MainMenu() {
  const menus = [
    { title: 'Home', href: '#' },
    { title: 'Shop', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Contact', href: '#' },
  ];

  return (
    <Container>
      {menus.map((menu) => {
        console.log(menu);
        return <MenuItem title={menu.title} />;
      })}
    </Container>
  );
}

export default MainMenu;
