import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PageHeader from './PageHeader';

test('should render pageTitle prop when passed', () => {
    const testTitle = 'test title'
    const { getByTestId } = render(<PageHeader pageTitle={testTitle} />);
    expect(getByTestId('pageTitle')).toHaveTextContent(testTitle)
})

test('should render pageTitle default text when pageTitle prop not passed', () => {
    const { getByTestId } = render(<PageHeader />);
    expect(getByTestId('pageTitle')).toHaveTextContent('pageTitle default text')
})