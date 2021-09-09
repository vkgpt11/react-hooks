import { act, renderHook } from '@testing-library/react-hooks';
import usePokemon from './usePokemon';

describe('usePokemon', () => {
  it('fetches pokemon by the url constructed from pokemon Name');
  describe('while fetching data', () => {
    it('handles loading state correctly');
  });

  describe('when got data successfully', () => {
    it('handles successful state correctly');
  });

  describe('with an error during request', () => {
    it('handles error state correctly');
  });
});
