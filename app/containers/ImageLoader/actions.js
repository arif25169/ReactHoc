/*
 *
 * ImageLoader actions
 *
 */

import { DEFAULT_ACTION, SELECT_AC_YR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function selectYear(selectYearID) {
  console.log(selectYearID)
  return {
    type: SELECT_AC_YR,
    selectYearID,
  };
}
