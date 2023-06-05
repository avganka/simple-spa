import {call, put, takeEvery} from 'redux-saga/effects';
import {
  FetchPostsFailureAction,
  FetchPostsSuccessAction,
  StartLoadingAction,
  StopLoadingAction,
} from './types';
import axios from 'axios';
import {Post} from '../types';

// Получить все посты
function* fetchPostsSaga() {
  try {
    yield put<StartLoadingAction>({type: 'START_LOADING', payload: 'posts'});
    const response: {data: Post[]} = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/posts'
    );
    yield put<FetchPostsSuccessAction>({type: 'FETCH_POSTS_SUCCESS', payload: response.data});
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put<FetchPostsFailureAction>({
        type: 'FETCH_POSTS_FAILURE',
        payload: error.message || 'Непредвиденная ошибка',
      });
    }
  } finally {
    yield put<StopLoadingAction>({type: 'STOP_LOADING', payload: 'posts'});
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
}

export default rootSaga;
