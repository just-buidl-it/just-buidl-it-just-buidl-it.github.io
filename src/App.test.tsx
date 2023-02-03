import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Just Build It/i)
  expect(headerElement).toBeInTheDocument();
  const subHeaderElement = screen.getByText(/Learn, Build, Ship/i)
  expect(subHeaderElement).toBeInTheDocument();
});

test('render banner', () => {
  render(<App />);
  const bannerElement = screen.getByAltText('banner')
  expect(bannerElement).toBeInTheDocument();
});

test('renders links', () => {
  render(<App />);
  const twitchLinkElement = screen.getByTestId('twitch-link')
  expect(twitchLinkElement).toBeInTheDocument();
  const twitterLinkElement = screen.getByTestId('twitter-link')
  expect(twitterLinkElement).toBeInTheDocument();
  const githubLinkElement = screen.getByTestId('github-link')
  expect(githubLinkElement).toBeInTheDocument();
});
