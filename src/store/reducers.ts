import {AnyAction} from 'redux';
import {Post} from '../types';

interface InitialState {
  posts: Post[];
  error: string | null;
}

const initialState: InitialState = {
  posts: [],
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {...state, posts: action.payload};
    case 'FETCH_POSTS_FAILURE':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default reducer;
