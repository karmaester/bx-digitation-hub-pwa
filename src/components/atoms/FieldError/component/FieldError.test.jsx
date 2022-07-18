import { render, screen } from '@testing-library/react';
import FieldError from '@components/atoms/FieldError';

describe('FieldError', () => {
  it('should render an error message', () => {
    const message = 'Campo requerido';
    render(<FieldError>{message}</FieldError>);
    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
  });
  it('should not render an error message', () => {
    render(<FieldError></FieldError>);
    const errorMessage = screen.queryByTestId('field-error');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
