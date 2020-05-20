import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const _initialState = Object.freeze({ currentUser: null});

const reducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        // debugger
        return Object.assign({}, state, { user: action.currentUser })
      case LOGOUT_CURRENT_USER:
        return _initialState;
      default:
        return state;
    }
};

const Store = createStore(reducer, [], applyMiddleware(thunk, logger));


export default Store;
