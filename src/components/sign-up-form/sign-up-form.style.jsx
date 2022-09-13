import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.75rem;

  h2 {
    margin: 10px 0;
  }
`;

export const NeedToSignIn = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  a {
    margin-left: 1rem;
  }

  a:hover,
  a:active {
    color: #4285f4;
  }
`;
