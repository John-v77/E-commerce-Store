import styled from 'styled-components'

export const NavigationContainer = styled.div`

height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

.navigation {

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 1rem;
  }

  .nav-links-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
}
