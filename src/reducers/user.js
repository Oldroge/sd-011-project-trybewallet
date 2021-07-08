import { LOGIN } from '../actions'

INITIAL_STATE = {
  user: { email: '' },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, user: action.payload
      };

      default:
        return state;
  }
}

export default user;