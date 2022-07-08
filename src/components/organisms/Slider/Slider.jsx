import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Styled components
import {
  Container, BannerImage, Loader, Texts, Arrow,
} from './styled';

// Assets
import backArrow from '../../../images/back-arrow.png';
import nextArrow from '../../../images/forward-arrow.png';

function Slider({ bannerData, isLoading }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (action) => {
    const { length } = bannerData.results;
    console.log('length', length);
    if (action === 'next') {
      if (currentSlide === length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    } else {
      if (currentSlide === 0) {
        setCurrentSlide(length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
      console.log('previous Slide click');
    }
  };

  console.log('information from useFeaturedBanners', bannerData, isLoading);
  console.log('currentSlide', currentSlide);

  return (
    isLoading ? <Loader />
      : (
        <Container key={bannerData.results[0].id}>
          <BannerImage
            src={bannerData.results[currentSlide].data.main_image.url}
            alt={bannerData.results[currentSlide].data.main_image.alt}
          >
            <Arrow src={backArrow} className="left" onClick={() => changeSlide('prev')} />
            <Arrow src={nextArrow} className="right" onClick={() => changeSlide('next')} />
          </BannerImage>
          <Texts>
            <p>{bannerData.results[currentSlide].data.title}</p>
            <p>{bannerData.results[currentSlide].data.description[0].text}</p>
          </Texts>
        </Container>
      )
  );
}

Slider.propTypes = {
  bannerData: PropTypes.shape({
    license: PropTypes.string,
    next_page: PropTypes.string,
    page: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    prev_page: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      uid: PropTypes.string,
      url: PropTypes.string,
      type: PropTypes.string,
      href: PropTypes.string,
      tags: [],
      first_publication_date: PropTypes.string,
      last_publication_date: PropTypes.string,
      slugs: PropTypes.arrayOf(PropTypes.string),
      linked_documents: PropTypes.arrayOf(PropTypes.string),
      lang: PropTypes.string,
      alternate_languages: [
        {
          id: PropTypes.string,
          type: PropTypes.string,
          lang: PropTypes.string,
        },
      ],
      data: {
        title: PropTypes.string,
        description: [
          {
            type: PropTypes.string,
            text: PropTypes.string,
            spans: PropTypes.arrayOf(PropTypes.string),
          },
        ],
        cta_link: PropTypes.string,
        cta_target: PropTypes.string,
        main_image: {
          dimensions: {
            width: PropTypes.number,
            height: PropTypes.number,
          },
          alt: PropTypes.string,
          copyright: null,
          url: PropTypes.string,
        },
      },
    })),
    results_per_page: PropTypes.number,
    results_size: PropTypes.number,
    total_pages: PropTypes.number,
    total_results_size: PropTypes.number,
    version: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Slider;
