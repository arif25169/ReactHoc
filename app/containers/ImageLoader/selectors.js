import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageLoader state domain
 */

const selectImageLoaderDomain = state => state.get('imageLoader', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImageLoader
 */
const makeSelectedYrID = () => createSelector( selectImageLoaderDomain,(substate) => substate.get('selectYearID'));
const makeSelectImageLoader = () =>
  createSelector(selectImageLoaderDomain, substate => substate.toJS());

export default makeSelectImageLoader;
export { selectImageLoaderDomain , makeSelectedYrID};
