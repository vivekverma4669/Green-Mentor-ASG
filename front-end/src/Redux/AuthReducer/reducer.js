import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/actionTypes';
const initialState = {
  token: "",
  isAuth: false,
  loading: false,
  error: null,
  success: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        loading: false,
        error: null,
        success: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
        isAuth: false,
        loading: false,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};

export default authReducer;
