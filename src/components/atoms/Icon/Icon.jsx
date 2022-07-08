import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import { Container, Icon } from './styled';

function Logo({
  src, alt, width, height,
}) {
  return (
    <Container>
      <Icon src={src} alt={alt} width={width} height={height} />
    </Container>
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Logo.defaultProps = {
  width: '30px',
  height: '30px',
};

export default Logo;
