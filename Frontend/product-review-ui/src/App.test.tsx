import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders home page text', () => {
  render(<App />);
  expect(screen.getByText(/We’d Love Your Feedback!/i)).toBeInTheDocument();
});

test('navbar shows all links', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
  expect(screen.getByText(/View All Reviews/i)).toBeInTheDocument();
});

test('feedback form submit button exists', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Submit Review/i })).toBeInTheDocument();
});