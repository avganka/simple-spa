import {call, put, takeEvery} from 'redux-saga/effects';
import {
  FetchCommentsFailureAction,
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchPostsFailureAction,
  FetchPostsSuccessAction,
  StartLoadingAction,
  StopLoadingAction,
} from './types';
import axios from 'axios';
import {Post} from '../types';
import {getPostCommentsApi, getPostsApi} from './api';

function* fetchPostsSaga() {
  try {
    yield put<StartLoadingAction>({type: 'START_LOADING', payload: 'posts'});
    const response: {data: Post[]} = yield call(getPostsApi);
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

function* fetchCommentsSaga(action: FetchCommentsRequestAction) {
  try {
    yield put<StartLoadingAction>({type: 'START_LOADING', payload: `comment-${action.payload}`});
    const response: {data: Comment[]} = yield call(getPostCommentsApi, action.payload);
    yield put<FetchCommentsSuccessAction>({
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: {postId: action.payload, comments: response.data},
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put<FetchCommentsFailureAction>({
        type: 'FETCH_COMMENTS_FAILURE',
        payload: error.message || 'Непредвиденная ошибка',
      });
    }
  } finally {
    yield put<StopLoadingAction>({type: 'STOP_LOADING', payload: `comment-${action.payload}`});
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
  yield takeEvery('FETCH_COMMENTS_REQUEST', fetchCommentsSaga);
}

export default rootSaga;
