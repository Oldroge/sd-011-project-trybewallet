const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: []
  }
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default wallet;