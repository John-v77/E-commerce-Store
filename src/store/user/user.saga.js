import { all, call, put, takeLatest } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.actions';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  signOutUser,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    const data = userSnapshot.data();
    yield put(signInSuccess({ id: userSnapshot.id, data }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signWithEmail({ payload: { email, password, name } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password,
      name
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess);
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
      displayName
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onEmailSignInStart),
  ]);
}
