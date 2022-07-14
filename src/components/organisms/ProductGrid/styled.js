import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled(Container)`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const MainTitle = styled.p`
  margin: 25px 0;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

const ProductItem = styled.div`
  width: 30%;
  height: 300px;
  margin: 10px 10px;
  overflow: hidden;
`;

const ProductTitle = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const Text = styled(ProductTitle)`
  font-weight: normal;
`;

const Tag = styled(ProductTitle)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  margin: 0;
  background-color: beige;
`;

const ProductPicture = styled.div`
  position: relative;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70%;
`;

export {
  Container, ProductContainer, ProductItem, MainTitle, ProductTitle, Text, Tag, ProductPicture,
};
