import { all, call } from 'redux-saga/effects';
import { fetchCategoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';

export function* rootSaga() {
  console.log('rootData is Called');
  yield all([
    // call(fetchCategoriesSaga),
    call(userSagas),
  ]);
}
