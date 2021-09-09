import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Joke from './Joke';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        icon_url: 'http://image.png',
        value: 'Joke text',
      }),
  })
);

describe('Joke', () => {
  it('loads the joke on mount', async () => {
    await act(async () => render(<Joke />));
    console.log(screen.debug());
    expect(screen.getByText('Loading ...')).toBeNull();
  });
});
