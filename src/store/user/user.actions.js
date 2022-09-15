import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = () =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START);

export const signInSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS);

export const signInFailure = () =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS);
