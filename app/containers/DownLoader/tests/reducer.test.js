import { fromJS } from 'immutable';
import downLoaderReducer from '../reducer';

describe('downLoaderReducer', () => {
  it('returns the initial state', () => {
    expect(downLoaderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
