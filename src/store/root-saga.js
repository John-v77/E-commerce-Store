import { all, call } from 'redux-saga/effects';
import { fetchCategoriesSaga } from './categories/category.saga';

export function* rootSaga() {
  yield all([call(fetchCategoriesSaga)]);
}
