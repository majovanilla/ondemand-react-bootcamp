import styled from 'styled-components';

export const Container = styled.div`
  width: 10%;
  margin: 5px;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const Icon = styled.img`
  width: ${(props) => props.width};
  height:  ${(props) => props.height};
`;
