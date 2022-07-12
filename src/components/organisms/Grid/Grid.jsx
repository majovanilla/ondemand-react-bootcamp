import React from 'react';
import PropTypes from 'prop-types';

// Atoms
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

// Styled components
import {
  Container, ProductContainer, ProductItem, ProductPicture, ProductPrice, ProductTitle,
} from './styled';
import Loader from '../../atoms/Loader/Loader';

function Grid({ productsData, isLoading }) {
  return (
    <Container>
      {isLoading ? <Loader />
        : (
          <>
            <SectionTitle title="Featured Products" />
            <ProductContainer>
              { productsData.results.map((product) => (
                <ProductItem key={product.id}>
                  <ProductPicture src={product.data.mainimage.url} />
                  <ProductTitle>{product.data.name}</ProductTitle>
                  <ProductPrice>
                    $
                    {product.data.price}
                  </ProductPrice>
                </ProductItem>
              ))}
            </ProductContainer>
          </>
        )}
    </Container>
  );
}

Grid.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  productsData: PropTypes.shape({
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

export default Grid;
