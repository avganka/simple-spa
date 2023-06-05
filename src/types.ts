export type SortType = 'popular' | 'desc' | 'asc';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
