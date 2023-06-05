import {SortType} from '../types';

export const setSort = (sortType: SortType) => ({
  type: 'SET_SORT',
  payload: sortType,
});

export const fetchPosts = () => ({
  type: 'FETCH_POSTS_REQUEST',
});
