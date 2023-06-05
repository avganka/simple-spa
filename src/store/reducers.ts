import {Post, SortType} from '../types';
import {Actions} from './types';

interface InitialState {
  posts: Post[];
  sort: SortType;
  loading: Record<string, boolean>;
  error: string | null;
}

const initialState: InitialState = {
  posts: [],
  sort: 'popular',
  loading: {},
  error: null,
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET_SORT':
      return {...state, sort: action.payload};
    case 'START_LOADING':
      return {...state, loading: {...state.loading, [action.payload]: true}};
    case 'STOP_LOADING':
      return {...state, loading: {...state.loading, [action.payload]: false}};
    case 'FETCH_POSTS_SUCCESS':
      return {...state, posts: action.payload};
    case 'FETCH_POSTS_FAILURE':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default reducer;
