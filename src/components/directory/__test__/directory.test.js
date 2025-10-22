import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Directory from '../directory.component';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Directory Component', () => {
  it('renders all category items', () => {
    renderWithRouter(<Directory />);
    
    expect(screen.getByText('hats')).toBeInTheDocument();
    expect(screen.getByText('jackets')).toBeInTheDocument();
    expect(screen.getByText('shoes')).toBeInTheDocument();
    expect(screen.getByText('womens')).toBeInTheDocument();
    expect(screen.getByText('mens')).toBeInTheDocument();
  });

  it('renders Shop Now text for all categories', () => {
    renderWithRouter(<Directory />);
    
    const shopNowElements = screen.getAllByText('Shop Now');
    expect(shopNowElements).toHaveLength(5);
  });

  it('renders correct number of categories', () => {
    renderWithRouter(<Directory />);
    
    const categoryTitles = ['hats', 'jackets', 'shoes', 'womens', 'mens'];
    categoryTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('displays category headings as h2 elements', () => {
    renderWithRouter(<Directory />);
    
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings).toHaveLength(5);
    
    const expectedTitles = ['hats', 'jackets', 'shoes', 'womens', 'mens'];
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(expectedTitles[index]);
    });
  });

  it('matches snapshot', () => {
    const { container } = renderWithRouter(<Directory />);
    expect(container.firstChild).toMatchSnapshot();
  });
});