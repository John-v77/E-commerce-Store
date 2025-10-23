import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import Navigation from '../navigation.component';

const mockStore = createStore(combineReducers({
  cart: (state = { isCartOpen: false, cartItems: [] }) => state,
  user: (state = { currentUser: null }) => state,
  categories: (state = { categories: [] }) => state
}));

const MockTodo = () =>{
    return(
        <Provider store={mockStore}>
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



  
