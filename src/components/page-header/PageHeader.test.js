import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PageHeader from './PageHeader';

const setup = () => {
    return {
        options : [
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
        ],
        onSelectSpy: jest.fn(),
        testTitle: 'test title'
    }
}

test('should render pageTitle prop when passed', () => {
    const { options, onSelectSpy, testTitle } = setup()
    const { getByTestId } = render(<PageHeader pageTitle={testTitle} themes={options} onThemeChange={onSelectSpy} />);
    expect(getByTestId('pageTitle')).toHaveTextContent(testTitle)
})

test('should render pageTitle default text when pageTitle prop not passed', () => {
    const { options, onSelectSpy } = setup()
    const { getByTestId } = render(<PageHeader themes={options} onThemeChange={onSelectSpy}  />);
    expect(getByTestId('pageTitle')).toHaveTextContent('pageTitle default text')
})