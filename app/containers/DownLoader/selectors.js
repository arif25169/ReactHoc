import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the downLoader state domain
 */

const selectDownLoaderDomain = state => state.get('downLoader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DownLoader
 */

const makeSelectDownLoader = () =>
  createSelector(
    selectDownLoaderDomain,
    substate => substate.toJS(),
  );

export default makeSelectDownLoader;
export { selectDownLoaderDomain };
