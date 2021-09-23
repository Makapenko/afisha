import { SUBCAT_ON_OFF, IS_AUTHENTICATED } from './actionTypes';

export function isAuthenticatedAC(payload) {
  return { type: IS_AUTHENTICATED, payload };
}

export function checkboxHandleAC(payload) {
  return { type: SUBCAT_ON_OFF, payload };
}
