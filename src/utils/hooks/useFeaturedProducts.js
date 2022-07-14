import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

function useFeaturedProducts() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    productsData: {},
    productsIsLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({ productsData: {}, productsIsLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]',
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          },
        );
        const productsData = await response.json();
        setFeaturedProducts({ productsData, productsIsLoading: false });
      } catch (err) {
        setFeaturedProducts({ productsData: {}, productsIsLoading: false });
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredProducts;
}

export default useFeaturedProducts;
