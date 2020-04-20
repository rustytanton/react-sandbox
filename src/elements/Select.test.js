import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Select from './Select';

it('should call the onSelect method with the correct argument when item is selected', () => {
    const onSelectSpy = jest.fn();
    const options = [
        {
            id: 'opt1',
            label: 'Option 1',
            value: 'value1'
        },
        {
            id: 'opt2',
            label: 'Option 2',
            value: 'value2'
        }
    ]
    const { getByTestId } = render(<Select options={options} onSelect={onSelectSpy} />);
    const select = getByTestId('Select')
    select.value = 'value2'
    fireEvent.change(select)
    expect(onSelectSpy).toHaveBeenCalledWith('value2')
})