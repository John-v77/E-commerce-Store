import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store, persistor} from "../../../store/store"
import Navigation from '../navigation.component';

const MockTodo = () =>{
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </Provider>
    )
}

it('renders logo', () => {
    render(<MockTodo />);
    const linkElement = screen.getByTestId("logo");
    expect(linkElement).toBeInTheDocument();
  });

it('renders logo text', () => {
    render(<MockTodo />);
    const linkElement = screen.getByText(/BCOOL/i);
    expect(linkElement).toBeInTheDocument();
    });


it('renders shop link', () => {
    render(<MockTodo />);
    const linkElement = screen.getByTestId("shop-link");
    expect(linkElement).toBeInTheDocument();
    });

it('renders sign-in link', () => {
    render(<MockTodo />);
    const linkElement = screen.getByText(/sign in/i);
    expect(linkElement).toBeInTheDocument();
    });

  
