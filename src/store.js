import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
const RECEIVE_BUDGET_VALUE = "RECEIVE_BUDGET_VALUE";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const budgetValues = (payload) => ({
  type: RECEIVE_BUDGET_VALUE,
  payload
});

const _initialState = Object.freeze({ user: null});

const reducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, { user: action.currentUser });
      case RECEIVE_BUDGET_VALUE:
        return Object.assign({}, state, action.payload);
      case LOGOUT_CURRENT_USER:
        return _initialState;
      default:
        return state;
    }
};

const Store = createStore(reducer, [], applyMiddleware(thunk));


export default Store;
