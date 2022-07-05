import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default { Container };
