import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import Link from './styled';

function MenuItem({ title, href }) {
  return (
    <Link href={href}>{title}</Link>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MenuItem;
