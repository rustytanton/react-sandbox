import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// ripped from the docs, basic smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('should toggle button text on click', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('button')).toHaveTextContent('click me')
  fireEvent.click(getByRole('button'))
  expect(getByRole('button')).toHaveTextContent('clicked')
  fireEvent.click(getByRole('button'))
  expect(getByRole('button')).toHaveTextContent('click me')
})