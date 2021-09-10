import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import Joke from './Joke';

describe('Joke', () => {
  it('Loading message on mount', async () => {
    await act(async () => render(<Joke />));
    expect(screen.getByText('Loading ...')).toBeInTheDocument();
    // cleanup();
  });
  it('loads the joke on mount', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            icon_url: 'http://image.png',
            value: 'Joke text',
          }),
      })
    );
    await act(async () => render(<Joke />));
    expect(screen.getByText('Joke text')).toBeInTheDocument();
    // cleanup();
  });
});
