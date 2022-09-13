import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 80px;
  margin-bottom: 5rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 2.25rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  cursor: pointer;
  text-align: center;
`;
