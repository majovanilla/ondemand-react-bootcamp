import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Atoms
import Loader from '../../atoms/Loader/Loader';

// Styled components
import {
  Container, BannerImage, Texts, Arrow,
} from './styled';

// Assets
import backArrow from '../../../images/back-arrow.png';
import nextArrow from '../../../images/forward-arrow.png';

function Slider({ bannerData: { results }, isLoading }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (action) => {
    const { length } = results;
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

  return (
    isLoading ? <Loader />
      : (
        <Container>
          <BannerImage
            src={results[currentSlide].data.main_image.url}
            alt={results[currentSlide].data.main_image.alt}
          >
            <Arrow src={backArrow} className="left" onClick={() => changeSlide('prev')} />
            <Arrow src={nextArrow} className="right" onClick={() => changeSlide('next')} />
          </BannerImage>
          <Texts>
            <p>{results[currentSlide].data.title}</p>
            <p>{results[currentSlide].data.description[0].text}</p>
          </Texts>
        </Container>
      )
  );
}

Slider.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  bannerData: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      uid: PropTypes.string,
      url: PropTypes.string,
      type: PropTypes.string,
      href: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      first_publication_date: PropTypes.string,
      last_publication_date: PropTypes.string,
      slugs: PropTypes.arrayOf(PropTypes.string),
      linked_documents: PropTypes.arrayOf(PropTypes.string),
      lang: PropTypes.string,
      alternate_languages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        lang: PropTypes.string,
      })),
      data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.shape({
          type: PropTypes.string,
          text: PropTypes.string,
          spans: PropTypes.arrayOf(PropTypes.string),
        })),
        cta_link: PropTypes.string,
        cta_target: PropTypes.string,
        main_image: PropTypes.shape({
          dimensions: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
          }),
          alt: PropTypes.string,
          copyright: PropTypes.string,
          url: PropTypes.string,
        }),
      }),
    })),
  }).isRequired,
};

export default Slider;
