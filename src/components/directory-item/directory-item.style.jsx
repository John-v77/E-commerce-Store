import styled from 'styled-components';

// if a <styled-component> targets another component inside of it,
// targeted component need to be defined ahead of the parent component

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 80px;
  width: 9rem;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid black;
  background-color: white;
  opacity: 0.95;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 15px 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    margin-top: 8px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} .category-item-body {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
