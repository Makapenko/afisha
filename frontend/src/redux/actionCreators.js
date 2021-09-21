import { IS_AUTHENTICATED } from './actionTypes';

export function isAuthenticatedAC(payload) {
  return { type: IS_AUTHENTICATED, payload };
}
