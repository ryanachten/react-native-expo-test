import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  email: 'reducer yoooo',
  password: '',
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
}
