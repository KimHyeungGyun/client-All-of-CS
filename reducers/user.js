import { 
  SET_USERNAME, 
  SET_PASSWORD, 
  SET_EMAIL, 
  LOG_IN, 
  LOG_OUT,
  SIGN_UP } from "../actions/types";

export const initialState = {
  isLoggedIn: false,
  user: null,
  siginUpData: {
    email: "",
    username: "",
    password: "",
  },
  siginInData: {
    sessionId: null,
  },
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        siginUpData : {
          ...state.siginUpData,
          username: action.data,
          password: action.data
        }
      }
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedOut: false,
        user: null,
      };
    case SET_USERNAME:
      return {
        ...state,
        siginUpData: {
          ...state.siginUpData,
          username: action.data,
        },
      };
    case SET_EMAIL:
      return {
        ...state,
        siginUpData: {
          ...state.siginUpData,
          email: action.data,
        },
      };
    case SET_PASSWORD:
      return {
        ...state,
        siginUpData: {
          ...state.siginUpData,
          password: action.data,
        },
      };
    default:
      return state;
  }
};

export default reducer;
