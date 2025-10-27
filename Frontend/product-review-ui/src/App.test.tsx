import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders home page text', () => {
  render(<App />);
  const element = screen.getByText(/Welcome to Product Review Analysis/i);
  expect(element).toBeInTheDocument();
});
