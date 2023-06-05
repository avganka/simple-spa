import {Post, SortType} from '../types';

export interface SetSearchStringAction {
  type: 'SET_SEARCH_STRING';
  payload: string;
}
export interface SetSortAction {
  type: 'SET_SORT';
  payload: SortType;
}
export interface StartLoadingAction {
  type: 'START_LOADING';
  payload: string;
}
export interface StopLoadingAction {
  type: 'STOP_LOADING';
  payload: string;
}
export interface FetchPostsRequestAction {
  type: 'FETCH_POSTS_REQUEST';
}

export interface FetchPostsSuccessAction {
  type: 'FETCH_POSTS_SUCCESS';
  payload: Post[];
}

export interface FetchPostsFailureAction {
  type: 'FETCH_POSTS_FAILURE';
  payload: string;
}

export interface FetchCommentsRequestAction {
  type: 'FETCH_COMMENTS_REQUEST';
  payload: string;
}

export interface FetchCommentsSuccessAction {
  type: 'FETCH_COMMENTS_SUCCESS';
  payload: {
    postId: string;
    comments: Comment[];
  };
}

export interface FetchCommentsFailureAction {
  type: 'FETCH_COMMENTS_FAILURE';
  payload: string;
}

export type Actions =
  | FetchCommentsRequestAction
  | FetchCommentsSuccessAction
  | FetchCommentsFailureAction
  | SetSearchStringAction
  | SetSortAction
  | StartLoadingAction
  | StopLoadingAction
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
