import {Post, SortType, Comment} from '../types';
import {Actions} from './types';

interface InitialState {
  posts: Post[];
  comments: Record<string, Comment[]>;
  sort: SortType;
  searchString: string;
  loading: Record<string, boolean>;
  error: string | null;
}

const initialState: InitialState = {
  posts: [],
  comments: {},
  sort: 'popular',
  searchString: '',
  loading: {},
  error: null,
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET_SEARCH_STRING':
      return {...state, searchString: action.payload};
    case 'SET_SORT':
      return {...state, sort: action.payload};
    case 'START_LOADING':
      return {...state, loading: {...state.loading, [action.payload]: true}};
    case 'STOP_LOADING':
      return {...state, loading: {...state.loading, [action.payload]: false}};
    case 'FETCH_POSTS_SUCCESS':
      return {...state, posts: action.payload};
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        ...state,
        comments: {...state.comments, [action.payload.postId]: action.payload.comments},
      };
    case 'FETCH_POSTS_FAILURE':
    case 'FETCH_COMMENTS_FAILURE':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default reducer;
