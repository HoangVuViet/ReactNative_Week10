import { all } from 'redux-saga/effects';
import watchTodoSagas from './todoSaga';
export default function* rootSaga() {
  yield all([watchTodoSagas()]);
}
