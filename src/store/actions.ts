import {SortType} from '../types';

export const setSearch = (searchString: string) => ({
  type: 'SET_SEARCH_STRING',
  payload: searchString,
});

export const setSort = (sortType: SortType) => ({
  type: 'SET_SORT',
  payload: sortType,
});

export const fetchPosts = () => ({
  type: 'FETCH_POSTS_REQUEST',
});

export const fetchComments = (postId: number) => ({
  type: 'FETCH_COMMENTS_REQUEST',
  payload: postId,
});

export const fetchUserWithPosts = (userId: number) => ({
  type: 'FETCH_USER_WITH_POSTS_REQUEST',
  payload: userId,
});
