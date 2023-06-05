import {Post, SortType} from '../types';

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

export type Actions =
  | SetSortAction
  | StartLoadingAction
  | StopLoadingAction
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
