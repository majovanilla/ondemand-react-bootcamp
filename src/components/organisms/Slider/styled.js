import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const BannerImage = styled.div`
  position: relative;
  height: 70vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 50vh;
  }
`;

const Loader = styled.div``;

const Texts = styled.div`
  position: absolute;
  max-width: 50%;
  z-index: 1500;
  bottom: 20px;
  left: 20px;
  background: rgba(100, 100, 100, 0.5);
  color: white;
  `;

const Arrow = styled.img`
  position: absolute;
  z-index: 2000;
  top: 50%;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  padding: 5px;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export {
  Container, BannerImage, Loader, Texts, Arrow,
};
