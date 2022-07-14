import React from 'react';
import PropTypes from 'prop-types';

// Atoms
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

// Styled components
import {
  Container, CategoryContainer, CategoryItem, CategoryPicture, CategoryTitle,
} from './styled';
import Loader from '../../atoms/Loader/Loader';

function CategoryGrid({ data, isLoading }) {
  console.log('data ====>', data);
  return (
    <Container>
      {isLoading ? <Loader />
        : (
          <>
            <SectionTitle title="Featured Categories" />
            <CategoryContainer>
              { data.results.map((category) => (
                <CategoryItem key={category.id} href="#">
                  <CategoryPicture src={category.data.main_image.url} />
                  <CategoryTitle>{category.data.name}</CategoryTitle>
                </CategoryItem>
              ))}
            </CategoryContainer>
          </>
        )}
    </Container>
  );
}

CategoryGrid.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
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

export default CategoryGrid;
