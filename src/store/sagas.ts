import {call, put, takeEvery} from 'redux-saga/effects';
import {
  FetchCommentsFailureAction,
  FetchCommentsRequestAction,
  FetchCommentsSuccessAction,
  FetchPostsFailureAction,
  FetchPostsSuccessAction,
  FetchUserWithPostsFailureAction,
  FetchUserWithPostsRequestAction,
  FetchUserWithPostsSuccessAction,
  StartLoadingAction,
  StopLoadingAction,
} from './types';
import axios from 'axios';
import {Post, User} from '../types';
import {getPostCommentsApi, getPostsApi, getUserWithPostsCommentsApi} from './api';

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

function* fetchUserWithPostsSaga(action: FetchUserWithPostsRequestAction) {
  try {
    yield put<StartLoadingAction>({type: 'START_LOADING', payload: 'user'});
    const response: {data: User} = yield call(getUserWithPostsCommentsApi, action.payload);
    yield put<FetchUserWithPostsSuccessAction>({
      type: 'FETCH_USER_WITH_POSTS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put<FetchUserWithPostsFailureAction>({
        type: 'FETCH_USER_WITH_POSTS_FAILURE',
        payload: error.message || 'Непредвиденная ошибка',
      });
    }
  } finally {
    yield put<StopLoadingAction>({type: 'STOP_LOADING', payload: 'user'});
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
  yield takeEvery('FETCH_COMMENTS_REQUEST', fetchCommentsSaga);
  yield takeEvery('FETCH_USER_WITH_POSTS_REQUEST', fetchUserWithPostsSaga);
}

export default rootSaga;
