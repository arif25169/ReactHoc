/*
 *
 * ImageLoader reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SELECT_AC_YR } from './constants';

export const initialState = fromJS({});

function imageLoaderReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
      case SELECT_AC_YR:
        return state.set('selectYearID', action.selectYearID);
    default:
      return state;
  }
}

export default imageLoaderReducer;
