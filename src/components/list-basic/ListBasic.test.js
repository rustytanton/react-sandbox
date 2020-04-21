import React from 'react';
import { render, getAllByText } from '@testing-library/react';
import ListBasic from './ListBasic';

it('should render three list items', () => {
    const listItems = [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' }
    ]
    const { getAllByText } = render(<ListBasic items={listItems} />);
    expect(getAllByText(/^Item \d$/)).toHaveLength(3)
});