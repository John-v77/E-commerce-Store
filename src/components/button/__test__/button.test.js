import { render, screen, fireEvent } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button.component';

describe('Button Component', () => {
  it('renders button with children text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('renders base button by default', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    expect(button).toBeInTheDocument();
  });

  it('renders google sign-in button type', () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.google}>
        Sign in with Google
      </Button>
    );
    const button = screen.getByText('Sign in with Google');
    expect(button).toBeInTheDocument();
  });

  it('renders inverted button type', () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Inverted Button
      </Button>
    );
    const button = screen.getByText('Inverted Button');
    expect(button).toBeInTheDocument();
  });

  it('renders inverted pay button type', () => {
    render(
      <Button buttonType={BUTTON_TYPE_CLASSES.invertedPay}>
        Pay Button
      </Button>
    );
    const button = screen.getByText('Pay Button');
    expect(button).toBeInTheDocument();
  });

  it('shows spinner when loading', () => {
    render(<Button isLoading={true}>Loading Button</Button>);
    expect(screen.queryByText('Loading Button')).not.toBeInTheDocument();
  });

  it('hides children when loading', () => {
    render(<Button isLoading={true}>Hidden Text</Button>);
    expect(screen.queryByText('Hidden Text')).not.toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    const button = screen.getByText('Clickable Button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes other props to button', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  it('still calls onClick when loading', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} isLoading={true}>
        Loading Button
      </Button>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});