import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from '@components/atoms/RadioButton';

describe('RadioButton', () => {
  it('should render a radio button', () => {
    render(<RadioButton value="ev">Evento</RadioButton>);
    const radioButton = screen.getByRole('radio', { name: /evento/i});
    expect(radioButton).toBeInTheDocument();
  });
  it('should select a radio button', () => {
    render(<RadioButton value="ev">Evento</RadioButton>);
    const radioButton: HTMLInputElement = screen.getByRole('radio', { name: /evento/i});
    expect(radioButton).not.toBeChecked();
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });
});
