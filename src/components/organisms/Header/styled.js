import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const Other = styled.div``;
