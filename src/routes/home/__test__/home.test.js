import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../home.component';

it('it should render Home Page', () => {
    const container = render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
        );
    expect(container).toMatchSnapshot();
  });