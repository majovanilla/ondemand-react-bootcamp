import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

function useFeaturedCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredCategories, setFeaturedCategories] = useState(() => ({
    categoriesData: {},
    categoriesIsLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();

    async function getFeaturedCategories() {
      try {
        setFeaturedCategories({ categoriesData: {}, categoriesIsLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]',
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          },
        );
        const categoriesData = await response.json();
        setFeaturedCategories({ categoriesData, categoriesIsLoading: false });
      } catch (err) {
        setFeaturedCategories({ categoriesData: {}, categoriesIsLoading: false });
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }

    getFeaturedCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredCategories;
}

export default useFeaturedCategories;
