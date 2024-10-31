// sagas/todoSaga.js
import { takeEvery, put } from 'redux-saga/effects';

function* addTodoSaga(action) {
  yield put({ type: 'ADD_TODO', payload: action.payload });
}

function* removeTodoSaga(action) {
  yield put({ type: 'REMOVE_TODO', payload: action.payload });
}
function* updateTodoSaga(action) {
  yield put({ type: 'UPDATE_TODO', payload: action.payload });
}

export default function* watchTodoSagas() {
  yield takeEvery('ADD_TODO_ASYNC', addTodoSaga);
  yield takeEvery('REMOVE_TODO_ASYNC', removeTodoSaga);
  yield takeEvery('UPDATE_TODO_TODO_ASYNC', updateTodoSaga);
}
