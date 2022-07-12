import React from 'react';

import useFeaturedBanners from '../utils/hooks/useFeaturedBanners';
import useFeaturedProducts from '../utils/hooks/useFeaturedProducts';

// Components
import Header from '../components/organisms/Header/Header';
import Slider from '../components/organisms/Slider/Slider';
import Grid from '../components/organisms/Grid/Grid';
import Footer from '../components/organisms/Footer/Footer';

// Styled components
import MainSection from './styled';

function HomePage() {
  const { data, isLoading } = useFeaturedBanners();

  const { productsData, productsIsLoading } = useFeaturedProducts();

  return (
    <>
      <Header />
      <MainSection style={{ marginTop: '83px' }}>
        <Slider bannerData={data} isLoading={isLoading} />
        <Grid productsData={productsData} isLoading={productsIsLoading} />
      </MainSection>
      <Footer />
    </>
  );
}

export default HomePage;
