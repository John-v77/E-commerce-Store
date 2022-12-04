import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25rem;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const GreetUserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GreetUserContainerText = styled.p`
  color: blue;
  margin-top: 0;
  margin-right: 0.8rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 370px;
  padding: 0.7rem;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h2`
  height: 100%;
  font-size: 2rem;
`;

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
