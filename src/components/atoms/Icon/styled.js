import styled from 'styled-components';

export const Container = styled.div`
  width: 10%;
  margin: 5px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const Icon = styled.img`
  margin: 0 5px;
  width: 15px;
  height: 15px;

  @media (min-width: 768px) {
    width: ${(props) => props.width};
    height:  ${(props) => props.height};
    margin: 0 10px;
  }
`;
