import React from 'react';

import useFeaturedBanners from '../utils/hooks/useFeaturedBanners';
import useFeaturedProducts from '../utils/hooks/useFeaturedProducts';
import useFeaturedCategories from '../utils/hooks/useFeaturedCategories';

// Components
import Header from '../components/organisms/Header/Header';
import Slider from '../components/organisms/Slider/Slider';
import ProductGrid from '../components/organisms/ProductGrid/ProductGrid';
import CategoryGrid from '../components/organisms/CategoryGrid/CategoryGrid';
import Footer from '../components/organisms/Footer/Footer';

// Styled components
import MainSection from './styled';

function HomePage() {
  const { data, isLoading } = useFeaturedBanners();
  const { productsData, productsIsLoading } = useFeaturedProducts();
  const { categoriesData, categoriesIsLoading } = useFeaturedCategories();

  return (
    <>
      <Header />
      <MainSection style={{ marginTop: '83px' }}>
        <Slider bannerData={data} isLoading={isLoading} />
        <ProductGrid data={productsData} isLoading={productsIsLoading} />
        <CategoryGrid data={categoriesData} isLoading={categoriesIsLoading} />
      </MainSection>
      <Footer />
    </>
  );
}

export default HomePage;
