import { fromJS } from 'immutable';
import imageLoaderReducer from '../reducer';

describe('imageLoaderReducer', () => {
  it('returns the initial state', () => {
    expect(imageLoaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
