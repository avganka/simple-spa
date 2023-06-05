import {Post, SortType} from './types';

export const postSorting = (sort: SortType, posts: Post[]): Post[] => {
  switch (sort) {
    case 'asc':
      return [...posts].sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });
    case 'desc':
      return [...posts].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    case 'popular':
      return [...posts].sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    default:
      return posts;
  }
};
