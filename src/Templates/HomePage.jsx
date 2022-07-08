import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/organisms/Header/Header';
import Slider from '../components/organisms/Slider/Slider';
import Grid from '../components/organisms/Grid/Grid';
import Footer from '../components/organisms/Footer/Footer';

function HomePage({ bannerData, isLoading }) {
  return (
    <>
      <Header />
      <div style={{ marginTop: '83px' }}>
        <Slider bannerData={bannerData} isLoading={isLoading} />
        <Grid />
      </div>
      <Footer />
    </>
  );
}

HomePage.propTypes = {
  bannerData: PropTypes.objectOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default HomePage;
