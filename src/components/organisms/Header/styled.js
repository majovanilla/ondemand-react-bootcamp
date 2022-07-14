import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9000;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const Other = styled.div``;
