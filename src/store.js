import { createStore } from 'redux';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const _initialState = Object.freeze({ currentUser: null});

const sessionReducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, { id: action.currentUser.id });
      case LOGOUT_CURRENT_USER:
        return _initialState;
      default:
        return state;
    }
};

const Store = createStore(sessionReducer);

export default Store;
