import {AnyAction} from 'redux';
import {Post} from '../types';

interface InitialState {
  posts: Post[];
  loading: Record<string, boolean>;
  error: string | null;
}

const initialState: InitialState = {
  posts: [],
  loading: {},
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
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
