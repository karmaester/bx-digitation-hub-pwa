import { render, screen, fireEvent, logRoles, prettyDOM } from '@testing-library/react';
import Select from '@components/atoms/Select';

describe('Select', () => {
  const testOptions = [
    {value: '1', name: 'Test 1'},
    {value: '2', name: 'Test 2'},
    {value: '3', name: 'Test 3'}
  ];
  it('should render a combobox with 3 options', () => {
    render(<Select options={testOptions}/>);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeInTheDocument();
    const options: HTMLOptionElement[] = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    const option: HTMLOptionElement = screen.getByRole('option', {name: 'Test 1'});
    expect(option.selected).toBe(true);
  });
  it('should change selected option', () => {
    render(<Select options={testOptions}/>);
    fireEvent.change(screen.getByRole('combobox'), {target: {value: '3'}});
    const option: HTMLOptionElement = screen.getByRole('option', {name: 'Test 3'});
    expect(option.selected).toBe(true);
  });
});
