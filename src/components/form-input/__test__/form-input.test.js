import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from '../form-input.component';

describe('FormInput Component', () => {
  const defaultProps = {
    label: 'Test Label',
    inputOptions: {
      type: 'text',
      value: '',
      onChange: jest.fn(),
      name: 'testInput'
    }
  };

  it('renders input field', () => {
    render(<FormInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<FormInput {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('does not render label when not provided', () => {
    const propsWithoutLabel = {
      inputOptions: defaultProps.inputOptions
    };
    render(<FormInput {...propsWithoutLabel} />);
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
  });

  it('passes input options to input element', () => {
    const inputProps = {
      label: 'Email',
      inputOptions: {
        type: 'email',
        value: 'test@example.com',
        onChange: jest.fn(),
        name: 'email',
        placeholder: 'Enter your email'
      }
    };

    render(<FormInput {...inputProps} />);
    const input = screen.getByRole('textbox');
    
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('value', 'test@example.com');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('placeholder', 'Enter your email');
  });

  it('calls onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    const props = {
      ...defaultProps,
      inputOptions: {
        ...defaultProps.inputOptions,
        onChange: mockOnChange
      }
    };

    render(<FormInput {...props} />);
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'hello' } });
    
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('handles password input type', () => {
    const passwordProps = {
      label: 'Password',
      inputOptions: {
        type: 'password',
        value: 'secret',
        onChange: jest.fn(),
        name: 'password'
      }
    };

    render(<FormInput {...passwordProps} />);
    const input = screen.getByDisplayValue('secret');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles input with initial value', () => {
    const propsWithValue = {
      ...defaultProps,
      inputOptions: {
        ...defaultProps.inputOptions,
        value: 'Initial Value'
      }
    };

    render(<FormInput {...propsWithValue} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Initial Value');
  });

  it('handles empty string value', () => {
    const propsWithEmptyValue = {
      ...defaultProps,
      inputOptions: {
        ...defaultProps.inputOptions,
        value: ''
      }
    };

    render(<FormInput {...propsWithEmptyValue} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('handles required attribute', () => {
    const requiredProps = {
      ...defaultProps,
      inputOptions: {
        ...defaultProps.inputOptions,
        required: true
      }
    };

    render(<FormInput {...requiredProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
  });
});