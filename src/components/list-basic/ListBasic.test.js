import React from 'react';
import { render, getAllByText } from '@testing-library/react';
import ListBasic from './ListBasic';

it('should render three list items', () => {
    const listItems = [
        (<a href="http://www.google.com">Item 1</a>),
        (<a href="http://www.google.com">Item 2</a>)
    ]
    const { getAllByText } = render(<ListBasic items={listItems} />);
    expect(getAllByText(/^Item \d$/)).toHaveLength(2)
});