import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled(Container)`
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

const CategoryItem = styled.a`
  width: 30%;
  height: 200px;
  margin: 10px 10px;
  overflow: hidden;
  position: relative;
`;

const CategoryTitle = styled.p`
  margin: 5px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 30%;
  z-index: 2000;
  right: 50%;
  transform: translate(50% , -50%);
  color: white;
  border: 1px solid;
  padding: 5px;
  background-color: gray;
  min-width: 60%;
`;

const CategoryPicture = styled.div`
  position: relative;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70%;
  opacity: 70%;
`;

export {
  Container, CategoryContainer, CategoryItem, MainTitle, CategoryTitle, CategoryPicture,
};
