import styled from 'styled-components';

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
  text-align: center;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 30px;
  margin-left: 2rem;
  margin-right: 2rem;
`;
