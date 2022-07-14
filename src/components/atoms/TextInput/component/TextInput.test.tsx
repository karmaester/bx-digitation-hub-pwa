import { render, screen, fireEvent, logRoles, prettyDOM } from '@testing-library/react';
import TextInput from '@components/atoms/TextInput';

describe('TextInput', () => {
  it('should render a text input', () => {
    render(<TextInput/>);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
